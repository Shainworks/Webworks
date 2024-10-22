//Here we gonns learn about CRUD operations where
// c - create
// r - read
// u - update
// d - delete
// if .monogodb.js extension is used then the file works as a mongodb playground file of local instance of computer


//Creating DB
use("Cruddb")
// console.log(db) outputs Cruddb
db.createCollection("Anime")
db.Anime.insertOne({
    Title: "Naruto",
    Rating: 10,
    Episodes: 500,
})
db.Anime.insertMany([
    {
        "Title": "Boruto",
        "Rating": 10,
        "Episodes": 297
    },
    {
        "Title": "Attack on Titan",
        "Rating": 9,
        "Episodes": 87
    },
    {
        "Title": "One Piece",
        "Rating": 10,
        "Episodes": 1075
    },
    {
        "Title": "Fullmetal Alchemist: Brotherhood",
        "Rating": 10,
        "Episodes": 64
    },
    {
        "Title": "Dragon Ball Z",
        "Rating": 9,
        "Episodes": 291
    },
    {
        "Title": "My Hero Academia",
        "Rating": 8,
        "Episodes": 138
    },
    {
        "Title": "Death Note",
        "Rating": 10,
        "Episodes": 37
    },
    {
        "Title": "Demon Slayer",
        "Rating": 9,
        "Episodes": 52
    },
    {
        "Title": "Sword Art Online",
        "Rating": 8,
        "Episodes": 96
    },
    {
        "Title": "Jujutsu Kaisen",
        "Rating": 9,
        "Episodes": 39
    }
]
)


//Reaading DB
let a = db.Anime.find({Rating: 11})   //To find the document
console.log(a)
// console.log(a)      //returns all the documents with rating = 10
// console.log(a.toArray())  it is the same as above but it returns it in the array format
// console.log(a.count()) Gives me the count of documents with the rating = 10
let b = db.Anime.findOne({Rating: 9})
console.log(b)  // returns the first document with rating = 9


//Updating DB
// db.Anime.update    well this is deprecated so better not to use it
db.Anime.updateOne({Rating: 10},{$set:{Rating: 11}})        //updates the first document with rating = 10 to rating = 11
db.Anime.updateMany({Rating: 10},{$set:{Rating: 11}})       //Similar as above but will apply it for every other document


//Deleting DB
db.Anime.deleteOne({Rating:9})        //it's kind of obvious now
db.Anime.deleteMany({Rating:11})

//Queries in mongoDB
// $eq - Matches values that are equal to a specified value.
// $gt - Matches values that are greater than a specified value.
// $gte - Matches values that are greater than or equal to a specified value.
// $in - Matches any of the values specified in an array.
// $lt - Matches values that are less than a specified value.
// $lte - Matches values that are less than or equal to a specified value.
// $ne - Matches all values that are not equal to a specified value.
// $nin - Matches none of the values specified in an array.

//Now how to use this is given below
// { <field1>: { <operator1>: <value1> }, ... }
