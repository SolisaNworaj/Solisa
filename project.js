let countDownDate = new Date("May 29, 2024 23:59:59").getTime();

let x = setInterval(function(){
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance/(1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
    let secs = Math.floor(distance % (1000 * 60 ) / 1000);

    document.getElementById("Days").innerHTML = days;
    document.getElementById("Hours").innerHTML = hours;
    document.getElementById("Mins").innerHTML = mins;
    document.getElementById("Secs").innerHTML = secs;

    if(distance < 0){
        clearInterval(x);

        document.getElementById("Days").innerHTML = "00";
        document.getElementById("Hours").innerHTML = "00";
        document.getElementById("Mins").innerHTML = "00";
        document.getElementById("Secs").innerHTML = "00";
    }


},1000);

