const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const flowers = document.getElementById("flowers");

let yesSize = 20;

// JA wird größer
yesBtn.addEventListener("click", () => {
    yesSize += 10;
    yesBtn.style.fontSize = yesSize + "px";
});

// NEIN flüchtet vor der Maus
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * window.innerWidth * 0.7;
    const y = Math.random() * window.innerHeight * 0.7;
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// Blumen fallen herunter, wenn man NEIN klickt
noBtn.addEventListener("click", () => {
    for (let i = 0; i < 20; i++) {
        const flower = document.createElement("div");
        flower.classList.add("flower");
        flower.textContent = "🌸";
        flower.style.left = Math.random() * window.innerWidth + "px";
        flower.style.top = "-20px";
        flowers.appendChild(flower);

        setTimeout(() => flower.remove(), 3000);
    }
});

