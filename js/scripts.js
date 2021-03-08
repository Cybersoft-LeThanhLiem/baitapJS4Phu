/**
 * Bài 1:
 */

function findDate(date, gap) {
    var dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() + gap);
    return dateCopy;
}

document.getElementById("btnNextDay").onclick = function () {
    var d = Number(document.getElementById("d").value);
    var m = Number(document.getElementById("m").value) - 1;
    var y = Number(document.getElementById("y").value);

    var date = new Date(y, m, d);
    var date1 = findDate(date, 1);
    document.getElementById("kqBai1__next").innerHTML = date1.toDateString();
}

document.getElementById("btnPrevDay").onclick = function () {
    var d = Number(document.getElementById("d").value);
    var m = Number(document.getElementById("m").value) - 1;
    var y = Number(document.getElementById("y").value);

    var date = new Date(y, m, d);
    var date0 = findDate(date, -1);
    document.getElementById("kqBai1__prev").innerHTML = date0.toDateString();
}
