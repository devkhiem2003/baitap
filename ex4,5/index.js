let today = new Date();
today = today.getFullYear();
let age = null;

do {
    age = prompt("Nhập năm sinh của bạn")
} while (age >= today) {
    if (age === "") {
        document.write("<h2>Bạn chưa nhập năm sinh của mình</h2>");
    }
    else {
        document.write("<h2>Tuổi của bạn là </h2>", "<h2>", today - age ,"</h2>")
    }
}
