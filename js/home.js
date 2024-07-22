// Ready function to ensure DOM is loaded before running code
var ready = (callback) => {
    if (document.readyState !== "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}

var signed = "false";
window.localStorage.setItem("SignIn",signed);
function checkSign(){
    if(window.localStorage.getItem("SignIn") == "false"){
        document.getElementById("overlay2").style.display = "flex";
    }
}

function Sign(){
    document.getElementById("overlay2").style.display = "none";
    window.localStorage.setItem("SignIn","true");
}

function Sign2(){
    document.getElementById("overlay2").style.display = "none";
    window.localStorage.setItem("SignIn","true");
}

setTimeout(checkSign,3000);
