window.document.onkeyup = function (evt) {

    console.log("type:",evt.type,
        "shiftKey:", evt.shiftKey,
        " ctrl:", evt.ctrlKey,
        " alt:", evt.altKey,
        "key:", evt.key,
        "code:", evt.code,
        "metakey:", evt.metaKey,
        "repeat:", evt.repeat,
        "isComposing:", evt.isComposing
    );

    document.getElementById("debug").value = `type: ${evt.type}\nshiftKey: ${evt.shiftKey}\nctrlKey: ${evt.ctrlKey}\naltKey: ${evt.altKey}\nkey: ${evt.key}\ncode: ${evt.code}\nmetakey: ${evt.metaKey}\nrepeat: ${evt.repeat}\nisComposing: ${evt.isComposing}`;

}

window.document.onkeydown = function (evt) {
    const keyCode = evt.code;

    console.log("type:",evt.type,
        "shiftKey:", evt.shiftKey,
        " ctrl:", evt.ctrlKey,
        " alt:", evt.altKey,
        "key:", evt.key,
        "code:", evt.code,
        "metakey:", evt.metaKey,
        "repeat:", evt.repeat,
        "isComposing:", evt.isComposing
    );

    document.getElementById("debug").value = `type: ${evt.type}\nshiftKey: ${evt.shiftKey}\nctrlKey: ${evt.ctrlKey}\naltKey: ${evt.altKey}\nkey: ${evt.key}\ncode: ${evt.code}\nmetakey: ${evt.metaKey}\nrepeat: ${evt.repeat}\nisComposing: ${evt.isComposing}`;

}