const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const container = document.getElementById("flower-container");

let yesClicks = 0;
let noClickedOnce = false;
let flowersVisible = true;

// Blumen erzeugen
function createFlowers() {
    container.innerHTML = ""; // alte Blumen löschen
    for (let i = 0; i < 40; i++) {
        const flower = document.createElement("div");
        flower.classList.add("flower");
        flower.textContent = "🌸";

        flower.style.left = Math.random() * window.innerWidth + "px";
        flower.style.top = Math.random() * window.innerHeight + "px";

        container.appendChild(flower);
    }
    flowersVisible = true;
}

// Startzustand
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

// NEIN → erstes Mal: Blumen fallen und verschwinden
noBtn.addEventListener("click", () => {
    if (!noClickedOnce && flowersVisible) {
        noClickedOnce = true;

        const flowers = document.querySelectorAll(".flower");
        flowers.forEach(flower => {
            flower.classList.add("fall");
        });

        // WICHTIG: erst nach der Animation löschen
        setTimeout(() => {
            container.innerHTML = "";
            flowersVisible = false;
        }, 2000);
    }
});

// NEIN → flüchtet vor der Maus
noBtn.addEventListener("mouseover", () => {
    if (!noClickedOnce) return;

    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 200);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// JA → Blumen wiederherstellen, springen lassen, Feuerwerk
yesBtn.addEventListener("click", () => {
    yesClicks++;

    // Wenn Blumen weg sind → neu erzeugen
    if (!flowersVisible) {
        createFlowers();
    }

    // Blumen springen
    document.querySelectorAll(".flower").forEach(flower => {
        flower.classList.add("jump");
        setTimeout(() => flower.classList.remove("jump"), 600);
    });

    // Blumen drehen sich bei jedem Ja-Klick
document.querySelectorAll(".flower").forEach(flower => {
    flower.classList.add("spin");
    setTimeout(() => flower.classList.remove("spin"), 600);
});


    // Feuerwerk beim 7. Klick
    if (yesClicks === 7) {
        heartFirework();
    }
});
