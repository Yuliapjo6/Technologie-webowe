function bth_anim () {
    let anim = document.getElementById("anim")
    anim.style.animation = "none"
}
var anim2 = document.getElementById("anim2")
     anim2 = document.getElementById("anim2")
    anim2.onmouseover =function () {
        anim2.style.animationPlayState = "paused"
    }
anim2.onmouseout = function () {
    anim2.style.animationPlayState = "running"
}
