var light = document.querySelector('#bulb');
var btn = document.querySelector("button");

var flag = 0;


btn.addEventListener("click", function () {
    if (flag == 0) {
        light.style.backgroundColor = "yellow";
        flag = 1;
    } else {
        light.style.backgroundColor = "transparent";
        // btn.innerHTML = "OFF";
        flag = 0;
    }
});