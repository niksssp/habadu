document.addEventListener("DOMContentLoaded", function () {
    const flame = document.querySelector(".flame");
    const message = document.querySelector(".message");
    const cake = document.querySelector(".cake");

    function blowCandle() {
        flame.style.animation = "blowout 0.5s forwards";
        setTimeout(() => {
            flame.style.display = "none";
            message.style.opacity = "1";
        }, 500);
    }

    cake.addEventListener("click", blowCandle);

    function addSprinkles() {
        const icing = document.querySelector(".icing");
        for (let i = 0; i < 10; i++) {
            let sprinkle = document.createElement("div");
            sprinkle.classList.add("sprinkle");
            sprinkle.style.top = ${Math.random() * 20 + 5}px;
            sprinkle.style.left = ${Math.random() * 140 + 5}px;
            sprinkle.style.backgroundColor = ["#ff5722", "#4caf50", "#3f51b5"][Math.floor(Math.random() * 3)];
            icing.appendChild(sprinkle);
        }
    }

    addSprinkles();
});
