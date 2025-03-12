document.addEventListener("DOMContentLoaded", function() {
    let flame = document.getElementById("flame");

    flame.addEventListener("click", function() {
        flame.style.transition = "opacity 0.5s ease-out";
        flame.style.opacity = "0";

        setTimeout(() => {
            flame.style.display = "none";
        }, 500);

        setTimeout(() => {
            flame.style.display = "block";
            flame.style.opacity = "1";
        }, 3000);
    });
});
