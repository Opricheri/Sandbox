document.write('<img id="oruga" src="../static/image/oruga.jpg">');

/*WASDでキャラ移動*/

let oruga = new Object();
oruga.y = 0;
oruga.x = 0;

let key = new Object();
key.up = false;
key.down = false;
key.right = false;
key.left = false;


function main() {
    addEventListener("keydown", wasd_down);
    addEventListener("keyup", wasd_up);

    if(key.left === true) {
        oruga.x -= 8;
    }
    if(key.up === true) {
        oruga.y -= 8;
    }
    if(key.right === true) {
        oruga.x += 8;
    }
    if(key.down === true) {
        oruga.y += 8;
    }

    document.getElementById("oruga").style.top = oruga.y + "px";
    document.getElementById("oruga").style.left = oruga.x + "px";

    requestAnimationFrame(main);
}
requestAnimationFrame(main);

function wasd_down( wasd ) {
    var key_code = wasd.keyCode;
    if( key_code === 65 ) {
        key.left = true;
    }
    if( key_code === 87 ) {
        key.up = true;
    }
    if( key_code === 68 ) {
        key.right = true;
    }
    if( key_code === 83 ) {
        key.down = true;
    }
}

function wasd_up( wasd ) {
    var key_code = wasd.keyCode;
    if( key_code === 65 ) {
        key.left = false;
    }
    if( key_code === 87 ) {
        key.up = false;
    }
    if( key_code === 68 ) {
        key.right = false;
    }
    if( key_code === 83 ) {
        key.down = false;
    }
}