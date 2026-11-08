document.querySelectorAll('.project-images img').forEach(img => {
    img.onclick = () => {
        let popup = document.createElement('div');
        popup.style = `
                    position: fixed;
                    top:0; left:0;
                    width:100%; height:100%;
                    background: rgba(0,0,0,0.8);
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    z-index:1000;
                `;

        let bigImg = document.createElement('img');
        bigImg.src = img.src;
        bigImg.style = "max-width:80%; max-height:80vh; object-fit:contain; border-radius:10px;";

        popup.appendChild(bigImg);
        popup.onclick = () => popup.remove();

        document.body.appendChild(popup);
    };
});

document.querySelectorAll('.slider-track img').forEach(img => {
    img.onclick = (event) => {
        // This prevents the click from triggering toggleProject() on the card
        event.stopPropagation();

        let popup = document.createElement('div');
        popup.style = `
                position: fixed;
                top:0; left:0;
                width:100%; height:100%;
                background: rgba(0,0,0,0.8);
                display:flex;
                align-items:center;
                justify-content:center;
                z-index:1000;
            `;

        let bigImg = document.createElement('img');
        bigImg.src = img.src;
        bigImg.style = "max-width:80%; max-height:80vh; object-fit:contain; border-radius:10px;"; // Tweaked slightly so vertical images fit well

        popup.appendChild(bigImg);
        popup.onclick = () => popup.remove();

        document.body.appendChild(popup);
    };
});

function toggleProject(header) {
    const card = header;
    card.classList.toggle("active");
}

// --- SCROLL PROGRESS INDICATOR ---

const scrollProgress = document.getElementById("scrollProgress");

function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = scrollHeight > 0
        ? scrollTop / scrollHeight
        : 0;

    scrollProgress.style.transform =
        `scaleX(${Math.min(1, Math.max(0, progress))})`;
}

window.addEventListener("scroll", updateScrollProgress, {
    passive: true
});

window.addEventListener("resize", updateScrollProgress);

updateScrollProgress();