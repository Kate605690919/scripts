var elem = document.querySelector("header");
var headroom = new Headroom(elem, {
    "tolerance": 1,
    "offset": 100,
    "classes": {
        "initial": "headroom",
        "pinned": "headroom--pinned",
        "unpinned": "headroom--unpinned"
    }
});
headroom.init();