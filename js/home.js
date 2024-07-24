// Ready function to ensure DOM is loaded before running code
var ready = (callback) => {
    if (document.readyState !== "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    
})
var signed = "false";
window.localStorage.setItem("SignIn",signed);
function checkSign(){
    if(window.localStorage.getItem("SignIn") == "false"){
        document.getElementById("overlay2").style.display = "flex";
    }
}

function Sign(){
    document.getElementById("overlay2").style.display = "none";
    Swal.fire({
                title: 'Logged In!',
                text: 'You have succesfully logged in!',
                icon: 'success',
                //showCancelButton: true,
                confirmButtonText: 'OK',
                //cancelButtonText: 'No, cancel!',
                confirmButtonColor: '#023402',
                //cancelButtonColor: '#d33'
            }).then((result) => {
                if(result.isConfirmed){
                    window.localStorage.setItem("SignIn","true");
                }
            })
}

function Sign2(){
    document.getElementById("overlay2").style.display = "none";
     Swal.fire({
                title: 'Signed Up!',
                text: 'You have successfully signed in',
                icon: 'success',
                //showCancelButton: true,
                confirmButtonText: 'OK',
                //cancelButtonText: 'No, cancel!',
                confirmButtonColor: '#023402',
                //cancelButtonColor: '#d33'
            }).then((result) => {
                if(result.isConfirmed){
                    window.localStorage.setItem("SignIn","true");
                }
            })
}
function turnSign(){
    document.getElementById("trySign").style.display = "flex";
    document.getElementById("tryLog").style.display = "none";
}
function turnLog(){
    document.getElementById("tryLog").style.display = "flex";
    document.getElementById("trySign").style.display = "none";
}
setTimeout(checkSign,5000);
