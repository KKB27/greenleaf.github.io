// Function to load a file
function loadFile(filePath) {
    return fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        });
}

// Function to load all required files
function loadFiles() {
    return Promise.all([
        loadFile('../Sign_in.html'),
        loadFile('../Sign_in.js'),
        loadFile('../Sign_in.css')
    ]);
}

// Ready function to ensure DOM is loaded before running code
var ready = (callback) => {
    if (document.readyState !== "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
    loadFiles()
        .then(([html, js, css]) => {
            // Insert HTML content
            document.body.insertAdjacentHTML('beforeend', html);

            // Insert CSS content
            const style = document.createElement('style');
            style.textContent = css;
            document.head.appendChild(style);

            // Insert and execute JS content
            const script = document.createElement('script');
            script.textContent = js;
            document.body.appendChild(script);

            console.log('All files loaded and executed');
        })
        .catch(error => {
            console.error('There was a problem with loading the files:', error);
        });
});

