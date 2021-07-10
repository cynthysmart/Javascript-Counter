
/*let count = (document.getElementById("result").innerText);
let number = parseInt(count);
let output = 7;

function lower() {
    if (number < 1) {
        document.getElementById("result").innerHTML = 0;
        window.alert("You have reached the lower limit of 0");
    }
    else if ( (number >= 1) && (number <= 50) ) {
        document.getElementById("result").innerHTML = output--;
        
    } 
    else if (number > 50) {
        document.getElementById("result").innerHTML = 50;
        window.alert("You have reached the upper limit of 50");
    };

}*/

let result = document.getElementById("result");
let count = 7;

function lower() {
    if (count == 0) {
        alert("You have reached the lower limit, 0")
    }
    else {
        count--;
        result.innerText = count;
    }
}

function add(){
    if(count == 50) {
        alert ("You have reached the upper limit, 50")
    }
    else {
        count++;
        result.innerText = count;
    }
}