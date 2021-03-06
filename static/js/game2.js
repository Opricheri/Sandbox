/*画像表示*/
let canvas = document.getElementById('canvas');
canvas.width = 640;
canvas.height = 640;

let ctx = canvas.getContext('2d');

let mapchip = new Image();
mapchip.src = '../static/image/map.png';

/*数字でマップを表現 */
/*画像に０と１を割り振っている */
let map = [
    [0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0],
    [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
    [1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0],
    [0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1],
    [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0],
    [0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1],
    [0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0]
];

addEventListener('load', function() {
    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[y].length; x++) {
            if (map[y][x] === 0) {
                ctx.drawImage(mapchip, 0, 0, 32, 32, 32 * x, 32 * y, 32, 32);
            }
            if (map[y][x] === 1) {
                ctx.drawImage(mapchip, 32, 0, 32, 32, 32 * x, 32 * y, 32, 32);
            }
        }
    }
}, false);

/*WASDでキャラ移動*/
document.write('<img id="satoimo" src="../static/image/satoimo2.png">');

let satoimo = new Object();
satoimo.y = 0;
satoimo.x = 0;
satoimo.move = 0;

let pressed_key = '';

let key = new Object();
key.up = false;
key.down = false;
key.right = false;
key.left = false;


function main() {
    addEventListener("keydown", wasd_down);
    addEventListener("keyup", wasd_up);

    if (satoimo.move === 0) {
        if (key.left === true) {
            satoimo.move = 32;
            pressed_key = 'left';
        }
        if (key.up === true) {
            satoimo.move = 32;
            pressed_key = 'up';
        }
        if (key.right === true) {
            satoimo.move = 32;
            pressed_key = 'right';
        }
        if (key.down === true) {
            satoimo.move = 32;
            pressed_key = 'down';
        }
    }

    if (satoimo.move > 0) {
        satoimo.move -= 4;
        if (pressed_key === 'left') {
            satoimo.x -= 4;
        }
        if (pressed_key === 'up') {
            satoimo.y -= 4;
        }
        if (pressed_key === 'right') {
            satoimo.x += 4;
        }
        if (pressed_key === 'down') {
            satoimo.y += 4;
        }
    }

    document.getElementById("satoimo").style.top = satoimo.y + "px";
    document.getElementById("satoimo").style.left = satoimo.x + "px";

    requestAnimationFrame(main);
}
requestAnimationFrame(main);

function wasd_down(wasd) {
    let key_code = wasd.keyCode;
    if (key_code === 65) {
        key.left = true;
    }
    if (key_code === 87) {
        key.up = true;
    }
    if (key_code === 68) {
        key.right = true;
    }
    if (key_code === 83) {
        key.down = true;
    }
}

function wasd_up(wasd) {
    let key_code = wasd.keyCode;
    if (key_code === 65) {
        key.left = false;
    }
    if (key_code === 87) {
        key.up = false;
    }
    if (key_code === 68) {
        key.right = false;
    }
    if (key_code === 83) {
        key.down = false;
    }
}