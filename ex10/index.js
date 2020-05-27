let txt = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque saepe quia dignissimos? Ducimus iure quam, dolore consequuntur amet quaerat perspiciatis magnam. Illo libero dolores tenetur iure sequi praesentium id nobis."
let showMoreBnt = document.getElementById("bntShowMore")
let showLessBnt = document.getElementById("bntShowLess")
let showTextP = document.getElementById("showText")
let maxLength = 50

function showText() {
    if(txt.length <= maxLength) {
        showTextP.innerHTML = txt;
        showMoreBnt.style.display = "none"
        showLessBnt.style.display = "none"
    }else{
        let shotText = getShotText(txt)
        showTextP.innerHTML = shotText
        showLessBnt.style.display = "none"
    }
}
function getShotText(str){
    return str.substr(0, maxLength) + "..."
}

function showMore() {
    showTextP.innerHTML = txt;
    showMoreBnt.style.display = "none"
    showLessBnt.style.display = "block"
}
function showLess() {
    showTextP.innerHTML = getShotText(txt);
    showMoreBnt.style.display = "block"
    showLessBnt.style.display = "none"
}
showText()