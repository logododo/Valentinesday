const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const container = document.getElementById("flower-container");

let yesClicks = 0;

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

// Herz-Feuerwerk
function heartFirework() {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement("div");
        heart.textContent = "💖";
        heart.style.position = "absolute";
        heart.style.left = (window.innerWidth / 2) + "px";
        heart.style.top = (window.innerHeight / 2) + "px";
        heart.style.fontSize = "30px";
        heart.style.pointerEvents = "none";

        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 200 + 50;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        heart.animate(
            [
                { transform: "translate(0,0)", opacity: 1 },
                { transform: `translate(${x}px, ${y}px)`, opacity: 0 }
            ],
            {
                duration: 1200,
                easing: "ease-out"
            }
        );

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 1500);
    }
}

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

// JA → Blumen springen + Klickzähler
yesBtn.addEventListener("click", () => {
    yesClicks++;

    document.querySelectorAll(".flower").forEach(flower => {
        flower.classList.remove("fall");
        flower.classList.add("jump");
        setTimeout(() => flower.classList.remove("jump"), 600);
    });

    if (yesClicks === 13) {
        heartFirework();
    }
});
