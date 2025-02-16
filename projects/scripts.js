document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    loadProjects();

    // Animate project cards
    setTimeout(() => {
        document.querySelectorAll(".project-card").forEach((project, index) => {
            setTimeout(() => {
                project.classList.add("show");
            }, index * 150);
        });
    }, 200);
});

function loadProjects() {
    const projectContainer = document.getElementById("projects");
    projectContainer.innerHTML = ""; // Clear before loading

    projectsData.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
        projectCard.dataset.category = project.category;
        projectCard.dataset.title = project.title.toLowerCase();

        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title} Thumbnail" loading="lazy">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span>#${tag}</span>`).join(" ")}
            </div>
            <div class="links">
		${project.links.website ? `<a href="${project.links.website}" target="_blank">Website</a>` : ""}
                ${project.links.view ? `<a href="${project.links.view}">View Project</a>` : ""}
                ${project.links.github ? `<a href="${project.links.github}">GitHub</a>` : ""}
                ${project.links.listen ? `<a href="${project.links.listen}">Listen</a>` : ""}
                ${project.links.spotify ? `<a href="${project.links.spotify}">Spotify</a>` : ""}
            </div>
        `;
        projectContainer.appendChild(projectCard);
    });
}

// Search Functionality
function searchProjects() {
    const query = document.getElementById("search-box").value.toLowerCase();
    document.querySelectorAll(".project-card").forEach(project => {
        project.style.display = project.dataset.title.includes(query) ? "block" : "none";
    });
}

// Filter Projects Based on Category
function filterProjects(category) {
    document.querySelectorAll(".project-card").forEach(project => {
        project.style.display = category === "all" || project.dataset.category === category ? "block" : "none";
    });
}

// Smooth Scroll to Projects Section
function scrollToProjects() {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
}

// Dark Mode Toggle
const toggleDarkMode = document.getElementById("toggle-dark-mode");
toggleDarkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
});

// Load Dark Mode Preference on Page Load
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    // Animate project cards
    const projects = document.querySelectorAll(".project-card");
    projects.forEach((project, index) => {
        setTimeout(() => {
            project.classList.add("show");
        }, index * 150);
    });
});

// Search Functionality
function searchProjects() {
    const query = document.getElementById("search-box").value.toLowerCase();
    const projects = document.querySelectorAll(".project-card");

    projects.forEach(project => {
        const title = project.dataset.title.toLowerCase();
        if (title.includes(query)) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });
}

// Filter Projects Based on Category
function filterProjects(category) {
    const projects = document.querySelectorAll(".project-card");

    projects.forEach(project => {
        if (category === "all" || project.dataset.category === category) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });
}
