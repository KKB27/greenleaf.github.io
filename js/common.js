var signStat = window.localStorage.getItem("SignIn");
if(signStat == "true"){
    document.getElementById("sgn").innerHTML = "Sign Out";
}
else{
    document.getElementById("sgn").innerHTML = "Sign In";
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
function newfunc(){
    //var val = window.localStorage.getItem("SignIn")
    if(document.getElementById("sgn").innerHTML == "Sign In"){
        document.getElementById("overlay2").style.display = "flex";
        document.getElementById("sgn").innerHTML = "Sign Out";
    }
    else{
        document.getElementById("sgn").innerHTML = "Sign In";
        document.getElementById("overlay2").style.display = "none";
        window.localStorage.setItem("SignIn","false");
        Swal.fire({
            title: 'Signed Out',
            text: 'You have successfully logged out',
            icon: 'success',
            //showCancelButton: true,
            confirmButtonText: 'OK',
            //cancelButtonText: 'No, cancel!',
            confirmButtonColor: '#023402',
            //cancelButtonColor: '#d33'
        })
    }
}
