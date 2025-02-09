const box = document.querySelector(".js-box");
const titleTimer = document.querySelector(".js-timer");
let counter = 11;
setTimeout(() => {
    box.style.display = "block";
    const id = setInterval(() => {
    
        counter -= 1;
        titleTimer.textContent = counter;
        if (!counter) { //!counter - counter === 0
            clearInterval(id);
            box.style.display = "none";
        }

    }, 1000);
}, 3000);


