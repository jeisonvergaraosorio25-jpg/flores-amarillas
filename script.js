const startButton = document.getElementById("startButton");
const surprise = document.getElementById("surprise");

startButton.addEventListener("click", () => {

    // Ocultar botón
    startButton.style.display = "none";

    // Mostrar sorpresa
    surprise.classList.remove("hidden");

    // Crear corazones flotantes
    createHearts();

});

function createHearts() {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-30px";

        heart.style.fontSize =
            Math.floor(Math.random() * 20 + 15) + "px";

        heart.style.zIndex = "10";
        heart.style.pointerEvents = "none";

        heart.style.transition =
            "transform 5s linear, opacity 5s linear";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.style.transform =
                `translateY(-110vh) rotate(${Math.random() * 360}deg)`;

            heart.style.opacity = "0";

        }, 100);

        setTimeout(() => {
            heart.remove();
        }, 5200);

    }, 500);
}
