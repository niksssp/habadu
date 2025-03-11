document.addEventListener("DOMContentLoaded", function() {
    const candle = document.querySelector(".candle");
    const flame = document.querySelector(".flame");
    const sprinklesContainer = document.querySelector(".sprinkles");

    // Generate random sprinkles
    for (let i = 0; i < 20; i++) {
        let sprinkle = document.createElement("div");
        sprinkle.classList.add("sprinkle");
        sprinkle.style.backgroundColor = getRandomColor();
        sprinkle.style.top = Math.random() * 40 + "px";
        sprinkle.style.left = Math.random() * 100 + "%";
        sprinkle.style.transform = rotate(${Math.random() * 360}deg);
        sprinklesContainer.appendChild(sprinkle);
    }

    function getRandomColor() {
        const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffcc00", "#ff66ff"];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    candle.addEventListener("click", function() {
        flame.style.display = "none"; // Blow out the candle
    });
});
