// Function to load the sign-in page content
function loadSignInPage() {
    fetch('Sign_in.html')
        .then(response => response.text())
        .then(data => {
            // Inject the fetched content into the sign-in container
            document.getElementById('signin-container').innerHTML = data;
            
            // Manually add the sign-in CSS to the document
            const signInStyles = document.createElement('link');
            signInStyles.rel = 'stylesheet';
            signInStyles.href = 'css/Sign_in.css';
            document.head.appendChild(signInStyles);

            // Manually add the sign-in JavaScript to the document
            const signInScript = document.createElement('script');
            signInScript.src = 'js/Sign_in.js';
            document.body.appendChild(signInScript);
        })
        .catch(error => console.error('Error loading sign-in page:', error));
}

setTimeout(loadSignInPage, 5000);

var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})
