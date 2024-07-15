setTimeout(show_overlay, 5000);

function show_overlay(){
    document.querySelector(".overlay").style.display= "flex";
    document.querySelector(".overlay").style.flexDirection= "column";
    document.querySelector(".overlay").style.justifyContent= "center";
    document.querySelector(".overlay").style.alignItems= "center";
}

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
registerBtn.addEventListener('click',() =>{
    container.classList.add("active");
});

loginBtn.addEventListener('click', () =>{
    container.classList.remove("active");
});

document.querySelector(".close-button").addEventListener("click", close_window);
function close_window(){
    document.querySelector(".overlay").style.display= "none";
}
