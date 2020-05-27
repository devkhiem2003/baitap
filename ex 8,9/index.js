let date2 = new Date()
alert(date2.toLocaleTimeString())  

setInterval(updateTime, 1000)
function updateTime() {
    let showTime = document.getElementById("Show-time")
    showTime.innerHTML = new Date().toLocaleString()
}