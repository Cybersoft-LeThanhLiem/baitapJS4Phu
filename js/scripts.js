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

/**
 * Bài 2:
 */

document.getElementById("btnDaysInMonth").onclick = function () {
    var m2 = Number(document.getElementById("m2").value);
    var y2 = Number(document.getElementById("y2").value);

    var date = new Date(y2, m2, 0);
    document.getElementById("kqBai2").innerHTML = date.getDate();
}

/**
 * Bài 4:
 */

function tinhKC(a1, b1, a2, b2) {
    return Math.sqrt((a1 - a2) ** 2 + (b1 - b2) ** 2);
}

document.getElementById("btnSV").onclick = function () {
    var ten1 = document.getElementById("tenSV1").value;
    var x1 = Number(document.getElementById("xSV1").value);
    var y1 = Number(document.getElementById("ySV1").value);

    var ten2 = document.getElementById("tenSV2").value;
    var x2 = Number(document.getElementById("xSV2").value);
    var y2 = Number(document.getElementById("ySV2").value);

    var ten3 = document.getElementById("tenSV3").value;
    var x3 = Number(document.getElementById("xSV3").value);
    var y3 = Number(document.getElementById("ySV3").value);

    var xT = Number(document.getElementById("xT").value);
    var yT = Number(document.getElementById("yT").value);

    var kc1 = tinhKC(x1, y1, xT, yT);
    var kc2 = tinhKC(x2, y2, xT, yT);
    var kc3 = tinhKC(x3, y3, xT, yT);
    var maxKC = Math.max(kc1, kc2, kc3);
    var maxSV = "";

    switch (maxKC) {
        case kc1:
            maxSV = ten1;
            break;
        case kc2:
            maxSV = ten2;
            break;
        case kc3:
            maxSV = ten3;
            break;
    }

    document.getElementById("kqBai4").innerHTML = maxSV;
}
