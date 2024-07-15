document.addEventListener('DOMContentLoaded', () => {
    setTimeout(show_overlay, 5000);

    function show_overlay() {
        const overlay = document.querySelector(".overlay");
        if (overlay) {
            overlay.style.display = "flex";
            overlay.style.flexDirection = "column";
            overlay.style.justifyContent = "center";
            overlay.style.alignItems = "center";
        }
    }

    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    if (registerBtn) {
        registerBtn.addEventListener('click', () => {
            if (container) {
                container.classList.add("active");
            }
        });
    }

    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            if (container) {
                container.classList.remove("active");
            }
        });
    }

    const closeButton = document.querySelector(".close-button");
    if (closeButton) {
        closeButton.addEventListener("click", close_window);
    }

    function close_window() {
        const overlay = document.querySelector(".overlay");
        if (overlay) {
            overlay.style.display = "none";
        }
    }
});
