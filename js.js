
let img = document.getElementById('bulb');
function turnOn() {
    console.log('Bật đèn');
    img.src = "pic_bulbon.gif";
    console.log(switch1.switchOn());
    console.log(lamp1.getStatus());
}
function turnOff() {
    console.log('Tắt đèn');
    img.src = "pic_bulboff.gif";
    console.log(switch1.switchOff());
    console.log(lamp1.getStatus());
}

function switchBulb() {
    if (img.src.match("bulbon")) {
        img.src = "pic_bulboff.gif";
    } else {
        img.src = "pic_bulbon.gif";
    }
}

let count = 10
while (count > 0) {
    console.log(`Số lần lặp còn lại: ${count}`);
    turnOn();
    turnOff()
    count--;
}