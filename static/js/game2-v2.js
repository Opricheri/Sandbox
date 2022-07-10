/*画像表示*/
let canvas = document.getElementById('canvas');
canvas.width = 640;
canvas.height = 640;

let ctx = canvas.getContext('2d');


let satoimo = new Object();
satoimo.img = new Image();
satoimo.img.src = '../static/image/satoimo2.png';
satoimo.x = 0;
satoimo.y = 0;
satoimo.move = 0;

let mapchip = new Image();
mapchip.src = '../static/image/map.png';

let key = new Object();
key.up = false;
key.down = false;
key.right = false;
key.left = false;
key.push = '';

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

function main() {
    ctx.fillStyle = "rgb( 0, 0, 0 )";
    ctx.fillRect(0, 0, 640, 640);

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

    ctx.drawImage(satoimo.img, satoimo.x, satoimo.y);

    addEventListener("keydown", wasd_down, false);
    addEventListener("keyup", wasd_up, false);

    if (satoimo.move === 0) {
        if (key.left === true) {
            let x = satoimo.x/32;
            let y = satoimo.y/32;
            x--;
            if (map[y][x] === 0) {
                satoimo.move = 32;
                key.push = 'left';
            }
        }
        if (key.up === true) {
            let x = satoimo.x/32;
            let y = satoimo.y/32;
            if (y > 0) {
                y--;
                if (map[y][x] === 0) {
                    satoimo.move = 32;
                    key.push = 'up';
                }
            }
        }
        if (key.right === true) {
            let x = satoimo.x/32;
            let y = satoimo.y/32;
            x++;
            if (map[y][x] === 0) {
                satoimo.move = 32;
                key.push = 'right';
            }
        }
        if (key.down === true) {
            let x = satoimo.x/32;
            let y = satoimo.y/32;
            if (y < 19) {
                y++;
                if (map[y][x] === 0) {
                    satoimo.move = 32;
                    key.push = 'down';
                }
            }
        }
    }

    if (satoimo.move > 0) {
        satoimo.move -= 4;
        if (key.push === 'left') {
            satoimo.x -= 4;
        }
        if (key.push === 'up') {
            satoimo.y -= 4;
        }
        if (key.push === 'right') {
            satoimo.x += 4;
        }
        if (key.push === 'down') {
            satoimo.y += 4;
        }
    }

    requestAnimationFrame(main);
}
/*ページと依存している全てのデータが読み込まれたら、メインループ開始 */
addEventListener('load', main(), false);

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