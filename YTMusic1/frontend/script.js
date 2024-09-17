console.log("Hey this my First Project using JS")
let currentMusics = new Audio();
let Musics;
let currentFolder;
function convertSecondsToMinutes(seconds) {
    if(isNaN(seconds)||seconds<0){
        return "00:00";
    }
    // Calculate the number of minutes
    const minutes = Math.floor(seconds / 60);

    // Calculate the remaining seconds
    const remainingSeconds = Math.floor(seconds % 60);

    // Format seconds to always show two digits
    const formattedMinutes = String(minutes).padStart(2,'0');
    const formattedSeconds = String(remainingSeconds).padStart(2,'0');


    // Return the formatted time as "minutes:seconds"
    return `${formattedMinutes}:${formattedSeconds}`;
}
async function getMusics(folder){
    currentFolder = folder;
    let a  = await fetch(`/YTMusic1/${folder}/`)
    let response = await a.text()
    // console.log(response)
    let div = document.createElement("div")
    div.innerHTML = response; 
    let as = div.getElementsByTagName("a")
    Musics = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith(".mp3")){
            Musics.push(element.href.split(`/${folder}/`)[1])
        }
    }
     let musicUl = document.querySelector(".Music-list").getElementsByTagName("ul")[0]
     musicUl.innerHTML=""
     for (const Music of Musics) {
         musicUl.innerHTML = musicUl.innerHTML+`<li><img class="invert" src="icn/Music.svg" alt="Music logo">
                         <div class="info">
                             <div>${Music.replaceAll("%20"," ")}</div>
                         </div>
                         <img class="invert" src="icn/play.svg" alt="Play btn">
                         </li>`
     }
     //Firing an Eveent listener to each Music
     //Here Array.from() converts the collection of <li> elements into an array
     Array.from(document.querySelector(".Music-list").getElementsByTagName("li")).forEach(e=>{
         e.addEventListener("click",element=>{
             playMUsic(e.querySelector(".info").getElementsByTagName("div")[0].textContent.trim())
         })
     })
}
const playMUsic = (track,pause = false)=>{
    currentMusics.src = `${currentFolder}/` + track
    if(!pause){
        currentMusics.play()
        Play.src = "icn/pause.svg"
    }
    document.querySelector(".song-info").innerHTML = decodeURI(track) 
    document.querySelector(".song-time").innerHTML = "00:00/00:00"
}
async function displayAlbums(){
    let a  = await fetch(`/YTMusic1/Musics/`)
    let response = await a.text() 
    let div = document.createElement("div")
    div.innerHTML = response; 
    let anchors = div.getElementsByTagName("a")
    let cardContainer = document.querySelector(".card-container")
    let array = Array.from(anchors)
    for (let index = 0; index < array.length; index++) {
        const e = array[index];
        if(e.href.includes("/Musics")){
            let folder =(e.href.split("/").slice(-2)[0])
            //Retrieving the metadata of the folder
            let a  = await fetch(`/YTMusic1/Musics/${folder}/info.json`)
            let response = await a.json()
            // console.log(response)
            cardContainer.innerHTML = `${cardContainer.innerHTML}<div class="card" data-folder="${folder}">
                        <div class="play">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50"
                                fill="none">
                                <circle cx="12" cy="12" r="12" fill="#000000" fill-opacity="0.5" />
                                <path
                                    d="M9.5 11.1998V12.8002C9.5 14.3195 9.5 15.0791 9.95576 15.3862C10.4115 15.6932 11.0348 15.3535 12.2815 14.6741L13.7497 13.8738C15.2499 13.0562 16 12.6474 16 12C16 11.3526 15.2499 10.9438 13.7497 10.1262L12.2815 9.32594C11.0348 8.6465 10.4115 8.30678 9.95576 8.61382C9.5 8.92086 9.5 9.6805 9.5 11.1998Z"
                                    fill="#FFFFFF" />
                            </svg>
                        </div>
                        <img src="/YTMusic1/Musics/${folder}/cover.jpg"
                            alt="Banner">
                        <h3>${response.title}</h3>
                        <p class="Playlist-paragraph">${response.Description}</p>
                    </div>`
        }
    }
      //Firing an event listener to load the playlist whenever it is clicked
      Array.from(document.getElementsByClassName("card")).forEach(e=>{
        e.addEventListener("click",async item=>{
            //Here currentTarget is used beacuse it will only target the element which is listened i.e, Card ....if i would have just used target then it would have listened to sub elements inside a card
            // console.log(item.currentTarget.folder)
            await getMusics(`Musics/${item.currentTarget.dataset.folder}`);
            playMUsic(Musics[0])
            document.querySelector(".left").style.left = "0";
        })
    })
}
async function main(){
     //All the songs are now stored in Music Variable
     await getMusics("Musics/Album1");
     //Plays the first Music when the page is loaded
     playMUsic(Musics[0],true)
     //Displays all the aalbums on the page
     displayAlbums()
    //Firing an Event listener to play , next and Previous
    Play.addEventListener("click",element=>{
        if(currentMusics.paused){
            currentMusics.play()
            Play.src = "icn/pause.svg"
        }
        else{
            currentMusics.pause()
            Play.src = "icn/play.svg"
        }
    })
    //Firing an event listener for timeupdate event(Triggers when audio or video starts playing)
    currentMusics.addEventListener("timeupdate",()=>{
        // console.log(currentMusics.currentTime,currentMusics.duration)
        document.querySelector(".song-time").innerHTML = `${convertSecondsToMinutes(currentMusics.currentTime)}/${convertSecondsToMinutes(currentMusics.duration)}`
        document.querySelector(".circle").style.left = (currentMusics.currentTime/currentMusics.duration)*100 + "%";
    })
    //Adding an event listener to the seekbar
    document.querySelector(".seekbar").addEventListener("click",e=>{
        let percent =  (e.offsetX/e.target.getBoundingClientRect().width)*100 ;
        document.querySelector(".circle").style.left = percent + "%";
        currentMusics.currentTime = (percent*(currentMusics.duration))/100;
    })
    //Firing an event listener to opeen the hamburger
    document.querySelector(".hamburger").addEventListener("click",()=>{
        document.querySelector(".left").style.left = "0"
    })
     //Firing an event listener to opeen the close btn
     document.querySelector(".close").addEventListener("click",()=>{
        document.querySelector(".left").style.left = "-120%"
    })
    //Firing an event listener to Previous btn
    Previous.addEventListener("click",()=>{
            // console.log("Previous clicked")
            let index = Musics.indexOf(currentMusics.src.split("/").slice(-1)[0])
            if ((index-1)>=0) {
                playMUsic(Musics[index-1])
            }
    })
     //Firing an event listener to Previous btn
     Next.addEventListener("click",()=>{
        // console.log("Next clicked")
        let index = Musics.indexOf(currentMusics.src.split("/").slice(-1)[0])
        if ((index+1) < Musics.length) {
            playMUsic(Musics[index+1])
        }
     })
     //Firing an event listener to manipulate the volume
     document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("mousemove",(e)=>{
        // console.log(e.target.value)
        currentMusics.volume = parseInt(e.target.value)/100;    //The volume value varies from 0 to 1 so we divide the value by 100
        if(currentMusics.volume>0){
            document.querySelector(".volume>img").src = document.querySelector(".volume>img").src.replace("mute.svg", "volume.svg")
        }
        if(currentMusics.volume == 0){
            document.querySelector(".volume>img").src = document.querySelector(".volume>img").src.replace("volume.svg","mute.svg")
        }
     })
     //Firing an event listener to mute the song when clicked
     document.querySelector(".volume>img").addEventListener("click", e=>{ 
        if(e.target.src.includes("icn/volume.svg")){
            e.target.src = e.target.src.replace("icn/volume.svg", "icn/mute.svg")
            currentMusics.volume = 0;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
        }
        else{
            e.target.src = e.target.src.replace("icn/mute.svg", "icn/volume.svg")
            currentMusics.volume = .10;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 10;
        }

    })
    //Firing event listeners to home,explore and library
    document.querySelector(".top-left").getElementsByTagName("ul")[0].addEventListener("click",(e)=>{
        // console.log(e)
        document.querySelector(".left").style.left = "-120%"
    })
}
main()