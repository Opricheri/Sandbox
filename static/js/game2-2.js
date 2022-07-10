'use strict';

let canvas;
let ctx;

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

//スプライトクラス
//img : スプライトに使う画像
//left : 画像の左から何ピクセルの部分を使うか
//top : 画像の上から何ピクセルの部分を使うか
class Sprite {
    constructor(img, left, top) {
        this.left = left || 0;
        this.top = top || 0;
        this.img = new Image();
        this.img.src = img;
        this.width = 32;
        this.height = 32;
    }
}


//ゲームクラス
//width : ゲーム全体の横幅
//height : ゲーム全体の縦幅
//
//add() : ゲームにスプライトを表示
class Game {
    constructor(width, height) {
        this.width = width || 320;
        this.height = height || 320;

        canvas = document.getElementById('canvas');
        canvas.width = this.width;
        canvas.height = this.height;
        ctx = canvas.getContext('2d');
    }
    add(sprite, x, y) {
        if (typeof x === "undefined") {
            sprite.x = 0;
        } else sprite.x = x;
        if (typeof y === "undefined") {
            sprite.y = 0;
        } else sprite.y = y;
        ctx.drawImage(sprite.img, sprite.left, sprite.top, sprite.width, sprite.height, sprite.x, sprite.y, sprite.width, sprite.height);
    }
}


//入力（input）クラス
class Input {
    constructor() {
        this.up = false;
        this.left = false;
        this.down = false;
        this.right = false;
    }
    push_key() {
        addEventListener("keydown", () => {
            let key_code = wasd.keyCode;
            if (key_code === 65) {
                this.left = true;
            }
            if (key_code === 87) {
                this.up = true;
            }
            if (key_code === 68) {
                this.right = true;
            }
            if (key_code === 83) {
                this.down = true;
            }
        }, false);
        addEventListener("keyup", () => {
            let key_code = wasd.keyCode;
            if (key_code === 65) {
                this.left = false;
            }
            if (key_code === 87) {
                this.up = false;
            }
            if (key_code === 68) {
                this.right = false;
            }
            if (key_code === 83) {
                this.down = false;
            }
        }, false);
    }
}

let input = new Input();


class Player {
    constructor(x, y) {
        this.sprite = new Sprite('../static/image/satoimo-brothers.png');
        this.x = x;
        this.y = y;
        this.move = 0;
    }
    move_sp() {
        input.push_key();
        game.add(this.sprite, this.x, this.y);
        if (this.move === 0) {
            if (input.left === true) {
                var x = this.x / 32;
                var y = this.y / 32;
                x--;
                if (map[y][x] === 0) {
                    this.move = 32;
                    input.push = 'left';
                }
            }
            if (input.up === true) {
                var x = this.x / 32;
                var y = this.y / 32;
                if (y > 0) {
                    y--;
                    if (map[y][x] === 0) {
                        this.move = 32;
                        input.push = 'up';
                    }
                }
            }
            if (input.right === true) {
                var x = this.x / 32;
                var y = this.y / 32;
                x++;
                if (map[y][x] === 0) {
                    this.move = 32;
                    input.push = 'right';
                }
            }
            if (input.down === true) {
                var x = this.x / 32;
                var y = this.y / 32;
                if (y < 19) {
                    y++;
                    if (map[y][x] === 0) {
                        this.move = 32;
                        input.push = 'down';
                    }
                }
            }
            if (this.move > 0) {
                this.move -= 4;
                if (input.push === 'left') {
                    this.x -= 4;
                }
                if (input.push === 'up') {
                    this.y -= 4;
                }
                if (input.push === 'right') {
                    this.x += 4;
                }
                if (input.push === 'down') {
                    this.y += 4;
                }
            }
        }
    }
}

let game = new Game(640, 640);

let player = new Player(0, 0);

let s_second = new Sprite('../static/image/satoimo-brothers.png', 33, 0);
let s_third = new Sprite('../static/image/satoimo-brothers.png', 65, 0);

let floor = new Sprite('../static/image/map.png', 0, 0);
let wall = new Sprite('../static.image/map.png', 33, 0);

function main() {
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(0, 0, 640, 640);

    for (var y = 0; y < map.length; y++) {
        for (var x = 0; x < map[y].length; x++) {
            if (map[y][x] === 0) game.add(floor, 32 * x, 32 * y);
            if (map[y][x] === 1) game.add(wall, 32 * x, 32 * y);
        }
    }

    player.move_sp();
    game.add(s_second, 32, 64);
    game.add(s_third, 96, 96);

    requestAnimationFrame(main);
}
addEventListener('load', main(), false);