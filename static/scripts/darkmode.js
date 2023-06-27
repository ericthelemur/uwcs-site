const dark = function () {
    const curr_dark = localStorage.getItem("dark_mode") == "dark";
    document.documentElement.setAttribute('data-bs-theme', curr_dark ? "dark" : 'light');
    console.log(curr_dark);
}

dark();

// Set toggle button on load
window.addEventListener('load', function () {
    document.getElementById('dark-mode').addEventListener('click', () => {
        const curr_dark = localStorage.getItem("dark_mode") == "dark";
        localStorage.setItem("dark_mode", curr_dark ? "light" : "dark");
        dark();
    });
});
