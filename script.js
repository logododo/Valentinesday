const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const container = document.getElementById("flower-container");

// Viele Blumen erzeugen
function createFlowers() {
    for (let i = 0; i < 40; i++) {
        const flower = document.createElement("div");
        flower.classList.add("flower");
        flower.textContent = "🌸";

        flower.style.left = Math.random() * window.innerWidth + "px";
        flower.style.top = Math.random() * window.innerHeight + "px";

        container.appendChild(flower);
    }
}

createFlowers();

// NEIN → Blumen fallen herunter
noBtn.addEventListener("click", () => {
    document.querySelectorAll(".flower").forEach(flower => {
        flower.classList.remove("jump");
        flower.classList.add("fall");

        setTimeout(() => {
            flower.style.top = "-50px";
            flower.classList.remove("fall");
        }, 2000);
    });
});

// JA → Blumen springen
yesBtn.addEventListener("click", () => {
    document.querySelectorAll(".flower").forEach(flower => {
        flower.classList.remove("fall");
        flower.classList.add("jump");

        setTimeout(() => flower.classList.remove("jump"), 600);
    });
});
