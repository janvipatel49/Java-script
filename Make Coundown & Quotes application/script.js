let timer;

function startCountdown() {
    clearInterval(timer);

    const value = document.getElementById("timeValue").value;
    const unit = document.getElementById("timeUnit").value;

    let totalSeconds = 0;

    if (unit === "days") totalSeconds = value * 86400;
    if (unit === "hours") totalSeconds = value * 3600;
    if (unit === "minutes") totalSeconds = value * 60;
    if (unit === "seconds") totalSeconds = value;

    timer = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(timer);
            alert("Countdown Finished!");
            return;
        }

        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor((totalSeconds % 86400) / 3600);
        let minutes = Math.floor((totalSeconds % 3600) / 60);
        let seconds = totalSeconds % 60;

        document.getElementById("d").innerText = days;
        document.getElementById("h").innerText = hours;
        document.getElementById("m").innerText = minutes;
        document.getElementById("s").innerText = seconds;

        totalSeconds--;
    }, 1000);
}

// Quotes
const quotes = [
    ["Work hard in silence.", "Frank Ocean"],
    ["Your time is limited.", "Steve Jobs"],
    ["Dream it. Wish it. Do it.", "Unknown"],
    ["Success is earned.", "APJ Abdul Kalam"]
];

let i = 0;
function changeQuote() {
    document.getElementById("quote").innerText = quotes[i][0];
    document.getElementById("author").innerText = "- " + quotes[i][1];
    i = (i + 1) % quotes.length;
}
changeQuote();
setInterval(changeQuote, 4000);
