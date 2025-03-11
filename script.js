document.addEventListener("DOMContentLoaded", function () {
    const flame = document.querySelector(".flame");
    const candle = document.querySelector(".candle");

    function blowCandle() {
        flame.style.display = "none";
    }

    candle.addEventListener("click", blowCandle);

    function addSprinkles() {
        const icing = document.querySelector(".icing");
        for (let i = 0; i < 20; i++) { // More sprinkles
            let sprinkle = document.createElement("div");
            sprinkle.classList.add("sprinkle");
            sprinkle.style.top = ${Math.random() * 25 + 5}px;
            sprinkle.style.left = ${Math.random() * 220 + 10}px;
            sprinkle.style.backgroundColor = ["#ff5722", "#4caf50", "#3f51b5", "#ffeb3b", "#ff4081"][Math.floor(Math.random() * 5)];
            icing.appendChild(sprinkle);
        }
    }

    addSprinkles();
});
