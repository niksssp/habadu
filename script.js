document.addEventListener("DOMContentLoaded", function () {
    const flame = document.querySelector(".flame");
    const message = document.querySelector(".message");

    function blowOutCandle() {
        if (flame.style.display !== "none") {
            flame.style.animation = "blowout 0.5s forwards";
            setTimeout(() => {
                flame.style.display = "none";
                message.style.opacity = "1";
            }, 500);
        }
    }

    flame.addEventListener("click", blowOutCandle);

    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.continuous = true;
        recognition.interimResults = false;

        recognition.onresult = function (event) {
            const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase();
            if (transcript.includes("blow")) {
                blowOutCandle();
            }
        };

        recognition.start();
    }
});
