// Initial settings
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor = "#000000";

let fontSize = 14;
let columns = canvas.width / fontSize;
let drops = Array.from({ length: columns }).fill(0);
let opacity = 1;
let color = "#00ff00"; // Default green color
let speed = 10; // Default speed (lower value = faster)
let autoContrast = false;

// Set initial label color to contrast with the default background
//const initialLabelColor = getAdvancedContrastingColor("#000000");
//const labels = document.querySelectorAll(".customization-panel label, .customization-panel h2");
//labels.forEach(label => {
//    label.style.color = initialLabelColor;
//});

// Generate random character
const getRandomChar = () => String.fromCharCode(0x30A0 + Math.random() * 96);

// Main matrix animation
function drawMatrix() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clears without a solid fill
    //ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
    //ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = color; // Apply matrix color
    ctx.font = `${fontSize}px monospace`; // Set font size

    for (let i = 0; i < drops.length; i++) {
        const text = getRandomChar();
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to the top randomly when it reaches the bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        // Move drop down by 1 unit based on speed
        drops[i] += speed / 10;
    }

    requestAnimationFrame(drawMatrix); // Loop animation
}
drawMatrix();

// Update columns and drops when font size changes
function updateDrops() {
    columns = canvas.width / fontSize;
    drops = Array.from({ length: columns }).fill(0);
}

// Event Listeners for Customization
document.getElementById("matrixColor").addEventListener("input", (e) => {
    if (!autoContrast) {
	color = e.target.value; // Allow manual override of text color
    }
});

document.getElementById("bgColor").addEventListener("input", (e) => {
    const bgColor = e.target.value; // Get the selected background color
    document.body.style.backgroundColor = bgColor; // Update background color
    canvas.style.backgroundColor = bgColor; // Apply it directly to the canvas

    // Update text color automatically if auto-contrast is enabled
    if (autoContrast) {
	//color = getContrastingColor(bgColor);
	color = getAdvancedContrastingColor(bgColor);
    }

    // Update label text color
    //const labelColor = getAdvancedContrastingColor(bgColor);
    //labels.forEach(label => {
    //    label.style.color = labelColor;
    //});
});

document.getElementById("matrixSpeed").addEventListener("input", (e) => {
    speed = 21 - e.target.value; // Adjust speed (lower value = faster)
});

document.getElementById("fontSize").addEventListener("input", (e) => {
    fontSize = parseInt(e.target.value); // Adjust font size
    updateDrops(); // Recalculate columns and drops for the new font size
});

document.getElementById("autoContrast").addEventListener("change", (e) => {
    autoContrast = e.target.checked;

    // If enabling auto-contrast, recalculate text color
    if (autoContrast) {
        const bgColor = document.getElementById("bgColor").value;
        color = getAdvancedContrastingColor(bgColor);
    }
});

// Utility function to calculate relative luminance
const calculateLuminance = (color) => {
    // Convert hex color to RGB
    const r = parseInt(color.slice(1, 3), 16) / 255;
    const g = parseInt(color.slice(3, 5), 16) / 255;
    const b = parseInt(color.slice(5, 7), 16) / 255;

    // Apply the luminance formula
    const a = [r, g, b].map(v =>
        v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
    );
    return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2]; // Standard luminance formula
};

// Function to determine a contrasting text color
const getContrastingColor = (bgColor) => {
    const luminance = calculateLuminance(bgColor);
    return luminance > 0.5 ? "#000000" : "#FFFFFF"; // Black text for light backgrounds, white for dark
};

// Calculate contrast ratio between two colors
const calculateContrastRatio = (bgColor, textColor) => {
    const bgLuminance = calculateLuminance(bgColor);
    const textLuminance = calculateLuminance(textColor);
    const lighter = Math.max(bgLuminance, textLuminance);
    const darker = Math.min(bgLuminance, textLuminance);
    return (lighter + 0.05) / (darker + 0.05);
};

// Determine the best contrasting color
const getAdvancedContrastingColor = (bgColor) => {
    const blackContrast = calculateContrastRatio(bgColor, "#000000");
    const whiteContrast = calculateContrastRatio(bgColor, "#FFFFFF");

    // Prefer the color with the highest contrast ratio
    return blackContrast >= 4.5 ? "#000000" : "#FFFFFF";
};

// Handle window resize to keep the canvas responsive
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    updateDrops(); // Recalculate columns and drops for the new canvas size
});
