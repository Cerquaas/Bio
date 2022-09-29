let elements = {
    githubLink: document.querySelector(".github-link"),
    znciLink: document.querySelector(".znci-link"),
}

elements.githubLink.addEventListener("click", () => {
    window.open("https://github.com/Cerquaas", "_blank");
});

elements.znciLink.addEventListener("click", () => {
    window.open("https://github.com/znci", "_blank");
});