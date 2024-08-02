if(window.localStorage.getItem("SignIn") == "false"){
    Swal.fire({
        title: 'Redirecting',
        text: 'Redirecting to homepage after sign out',
        icon: 'info',
        //showCancelButton: true,
        confirmButtonText: 'OK',
        //cancelButtonText: 'No, cancel!',
        confirmButtonColor: '#023402',
        //cancelButtonColor: '#d33'
    }).then((result)=>{
        location.href = "../index.html";
    })
}
var productArray = [document.getElementById("1"),document.getElementById("2"),document.getElementById("3"),document.getElementById("4"),document.getElementById("5"),document.getElementById("6")]
var x = 0;
for(x=0;x<6;x++){
    productArray[x].style.display = "none";
}
var productBuy = []
var productAll = ["GreenRoof","Garbage","GWR","RWH","Solar"];
var grand = document.getElementById("grand");
var index = 0;
var amt = 0;
for(var i=0;i<5;i++){
    if(window.localStorage.getItem(productAll[i])){
        var value = JSON.parse(window.localStorage.getItem(productAll[i]));
        grand.style.display = "flex";
        productArray[index].style.display = "flex";
        var y = "Item: " + value.name + '<br>' + "Quantity: " + value.quantity + "<br> Total Price: &#8377;" + value.quantity*value.intP;
        productArray[index].innerHTML = y;
        index = index + 1;
        amt = amt+(value.intP*value.quantity);
        document.getElementById("paynow").style.display = "block";
    }
}
window.localStorage.setItem("amt",amt);


