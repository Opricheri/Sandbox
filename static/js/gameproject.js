addEventListener("keydown", keydownfunc);

function keydownfunc(event) {
    alert(event.key);
}

/*御神籤*/
let myClick = document.getElementById("omikuji");
myClick.onclick = function () {
    rnd = Math.floor(Math.random() * 7); {
        let result = document.getElementById("count");
        result.textContent = String(result);
        if (rnd === 0) {
            result.textContent = "大吉";
        }
        if (rnd === 1) {
            result.textContent = "吉";
        }
        if (rnd === 2) {
            result.textContent = "中吉";
        }
        if (rnd === 3) {
            result.textContent = "小吉";
        }
        if (rnd === 4) {
            result.textContent = "末吉";
        }
        if (rnd === 5) {
            result.textContent = "凶";
        }
        if (rnd === 6) {
            result.textContent = "大凶";
        }
    }
}