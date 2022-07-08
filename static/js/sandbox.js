let myButton = document.getElementById("demo");
myButton.onclick = function() {
    alert("痛っ！");
}

function showDialog() {
    alert('Hello');
}

let cnt = 0;
function countClick() {
    cnt ++;
    let element = document.getElementById("count");
    element.textContent = String(cnt);
}