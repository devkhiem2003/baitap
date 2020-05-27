let miliSec = 0;
let sec = 0;
let minute = 0;
function start() {
    document.getElementById("displayTimer").value = minute + ":" + sec + ":" + miliSec
    startS = setTimeout("start()", 10)
    miliSec++
    if (miliSec === 100) {
        miliSec = 0
        sec++
    }
    if (sec === 60) {
        sec = 0
        minute++
    }
}
function stop() {
    clearTimeout(startS)
}
function reset() {
    location.reload()
}