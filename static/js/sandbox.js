let myButton = document.getElementById("demo");
myButton.onclick = function() {
    alert("痛っ！違うこっちじゃない！");
}

function showDialog() {
    alert('【クリックゲームという名の苦行】');
}

let cnt = 0;
function countClick() {
    cnt ++;
    let element = document.getElementById("count");
    element.textContent = String(cnt);
    if (cnt === 50) {
        element.textContent = String(cnt + "   「がんばれー！」");
    }
    if (cnt === 100) {
        element.textContent = String("神は言っている。FGOをやれと。")
        location = "https://www.fate-go.jp";
    }
}