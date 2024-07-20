let gas_val= null;
let electricity=null;
let cylinder= null;
let pipeline= null;
let dropdown= null;
let vehicle_cfp= null;
let elec_cfp= null;
let gas_cfp= null;
let names= null;

//The below gunction is to switch forms depending on individual/ society choice
document.querySelectorAll("button.user_choice").forEach(button => {button.addEventListener("click", function(e){open_form(e)});});

function open_form(e){
    names= e.target.id;
    if (names==="ind"){
        document.querySelector(".choice").style.display= 'block';
        document.querySelectorAll(".indiv").forEach(element =>{element.style.display= 'block';});
        document.querySelector("#ind").style.marginLeft = '8vw';
        document.querySelectorAll(".society").forEach(element =>{element.style.display= 'none';});

    }
    else if (names==="soc"){
        document.querySelector(".choice").style.display= 'block';
        document.querySelectorAll(".society").forEach(element =>{element.style.display= 'block';});
        document.querySelector("#soc").style.marginRight = '8vw';
        document.querySelectorAll(".indiv").forEach(element =>{element.style.display= 'none';});
    }
}

document.querySelectorAll(".gas_choice").forEach(button => {button.addEventListener("click", function(e){gas_info(e)});});

function gas_info(e){
    gas_val= e.target.id;
    if(gas_val == 'cyl'){
        document.querySelectorAll('.a').forEach(el => el.style.display = 'block');
        document.querySelectorAll('.b').forEach(el => el.style.display = 'none');
    }
    else{
        document.querySelectorAll('.a').forEach(el => el.style.display = 'none');
        document.querySelectorAll('.b').forEach(el => el.style.display = 'block');
    }
}

//Form is about to be submitted now
document.querySelector("#submit_but").addEventListener("click", function(ev){
    ev.preventDefault();
    pass_values();
    
})

function pass_values(){
    //First know area in which the user lives, so we can calculate avg. CFP due to vehicles.
    dropdown= document.querySelector(".area").value;
    //Now get values of electricity used, and gas used
    electricity= parseFloat(document.querySelector("#e_bill").value);
    if(gas_val== 'cyl'){
        cylinder= parseFloat(document.querySelector("#cyl_bill").value);
    }
    else if(gas_val== "pipe"){
        pipeline= parseFloat(document.querySelector("#pipe_bill").value);
    }
    check_if_all_present(); //to make
}

function check_if_all_present(dropdown, electricity, gas_val, cylinder, pipeline ){
    dropdown= dropdown || "0";
    electricity= electricity || 0;
    gas_val= gas_val || "0";
    if(gas_val== 'cyl'){cylinder= cylinder || 0;}
    else if(gas_val== 'pipe'){pipeline = pipeline ||0;}
    calculate();
}

//actual calculation
function calculate(){ 
        var cfp, trunc;
        calculate_vehicle_cfp(dropdown);
        calculate_elec_cfp();
        calculate_gas_cfp(gas_val);

        if(names == 'ind'){
            cfp= (vehicle_cfp + elec_cfp + gas_cfp)/ 1000;  
            trunc= cfp.toFixed(2);          
        }

        else if(names == 'soc'){
            var houses= parseFloat(document.getElementById("house_no").value);
            cfp= ((vehicle_cfp + elec_cfp + gas_cfp) * houses) / 1000;
            trunc= cfp.toFixed(2); 
        }
        display_result(trunc, names);
}

function display_result(trunc, names){
        res= document.querySelector("#result");
        if(names== 'ind'){res.innerHTML= "You generate "+ trunc +" metric tonnes of CO2 per year";}
        else if(names== 'soc'){res.innerHTML= "Your society generates " + trunc + " metric tonnes of CO2 per year";}
        res.style.display= "block";
        res.style.textAlign= "center";
        res.style.fontFamily= "Montserrat";
        res.style.color= "white"; 
        res.style.marginTop= "10px";  
    //new code
        document.querySelector(".meter").style.display= "block";
        document.querySelector(".meter").style.marginLeft= "40%";
        res.style.fontSize= "1.4rem";     

        if(trunc>=0 && trunc<=2){
            document.querySelector("#arr-g").style.visibility= "visible";
            document.querySelector("#arr-y").style.visibility= "hidden";
            document.querySelector("#arr-o").style.visibility= "hidden";
            document.querySelector("#arr-r").style.visibility= "hidden";
            res.style.backgroundColor= "green";
            console.log("green");
        }
        else if(trunc>2 && trunc<=4){
            document.querySelector("#arr-g").style.visibility= "hidden";
            document.querySelector("#arr-y").style.visibility= "visible";
            document.querySelector("#arr-o").style.visibility= "hidden";
            document.querySelector("#arr-r").style.visibility= "hidden";
            res.style.backgroundColor= "#FFBF00";
            console.log("yelleo");
        }
        else if(trunc>4 && trunc<=8){
            document.querySelector("#arr-g").style.visibility= "hidden";
            document.querySelector("#arr-y").style.visibility= "hidden";
            document.querySelector("#arr-o").style.visibility= "visible";
            document.querySelector("#arr-r").style.visibility= "hidden";
            console.log("o");
            res.style.backgroundColor= "orange";
        }
        else if(trunc>8){
            document.querySelector("#arr-g").style.visibility= "hidden";
            document.querySelector("#arr-y").style.visibility= "hidden";
            document.querySelector("#arr-o").style.visibility= "hidden";
            document.querySelector("#arr-r").style.visibility= "visible";
            res.style.backgroundColor= "red";
            console.log("red");
        }
        //end of new code
}


function calculate_vehicle_cfp(dropdown){
    //vehicle_cfp;
    switch (dropdown){
        case 'Rural':
            vehicle_cfp= (7300/25)* 2.63;
            break;
        case 'Suburban':
            vehicle_cfp= (18250/16)* 2.63;
            break;
        case 'Urban':
            vehicle_cfp= (10375/16)* 2.63;
            break;
        case 'Metropolitan':
            vehicle_cfp= (12775/17)* 2.63;
            break;
    }
}

function calculate_elec_cfp() {
    elec_cfp= electricity * 1.5 * 0.454 * 12; // *12 for yearly amount
}

function calculate_gas_cfp(gas_val){
    //gas_cfp;
    if (gas_val == 'cyl'){
        gas_cfp = cylinder * 51.89 ; // user has put in yearly amount 
    }
    else if(gas_val == 'pipe'){
        gas_cfp = pipeline * 2.2 * 12; //pipeline is in units std cu. metre and 12 is for yearly amount
    }
}
