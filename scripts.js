document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".hero h1");
    setInterval(() => {
        title.style.textShadow = `0px 0px ${Math.random() * 15}px #00ffcc`;
    }, 500);
});

// Update font when user selects a new one
document.getElementById("fontSelect").addEventListener("change", (e) => {
    document.body.style.fontFamily = e.target.value + ", sans-serif";
    localStorage.setItem("selectedFont", e.target.value); // Save preference
});

// Load the saved font on page load
window.addEventListener("DOMContentLoaded", () => {
    const savedFont = localStorage.getItem("selectedFont");
    if (savedFont) {
        document.body.style.fontFamily = savedFont + ", sans-serif";
        document.getElementById("fontSelect").value = savedFont;
    }
});

