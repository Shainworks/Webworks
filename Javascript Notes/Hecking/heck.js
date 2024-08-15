let text = [
    document.querySelector(".box1"),
    document.querySelector(".box2"),
    document.querySelector(".box3"),
    document.querySelector(".box4"),
    document.querySelector(".box5"),
];

let currentIntervalId = null; // Variable to store the current blinking interval

const randomDelay = () => {
    return new Promise((resolve) => {
        let timeout = 1 + 6 * Math.random();
        setTimeout(() => {
            resolve();
        }, timeout * 1000);
    });
};

const startBlinking = (element) => {
    // Stop any existing blinking interval
        clearInterval(currentIntervalId);
    currentIntervalId = setInterval(() => {
        if (element.innerHTML.endsWith("...")) {
            element.innerHTML = element.innerHTML.slice(0, -3);
        } else {
            element.innerHTML += ".";
        }
    }, 300);
};

const showItem = async (param) => {
    await randomDelay();
    param.style.visibility = "visible"; 
    startBlinking(param);
};

async function main() {
    for (const item of text) {
        item.style.visibility = "hidden"; 
    }

    for (const item of text) {
        await showItem(item); // Wait until item is shown
    }

    // Clear the last blinking interval if needed
        await randomDelay()
        clearInterval(currentIntervalId);
    
}

main();