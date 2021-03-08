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

/**
 * Bài 3:
 */

document.getElementById("btnRead").onclick = function () {
    var n = Number(document.getElementById("num").value);

    var hundred = Math.floor(n / 100);
    var ten = Math.floor((n % 100) / 10);
    var unit = n % 10;

    console.log(hundred, ten, unit);

    var rH = "";
    var rHpost = "trăm";
    var rT = "";
    var rTpost = "";
    var rU = "";

    switch (hundred) {
        case 0:
            rH = ""; rHpost = ""
            break;
        case 1:
            rH = "Một";
            break;
        case 2:
            rH = "Hai";
            break;
        case 3:
            rH = "Ba";
            break;
        case 4:
            rH = "Bốn";
            break;
        case 5:
            rH = "Năm";
            break;
        case 6:
            rH = "Sáu";
            break;
        case 7:
            rH = "Bảy";
            break;
        case 8:
            rH = "Tám";
            break;
        case 9:
            rH = "Chín";
            break;
    }

    switch (ten) {
        case 0:
            rT = ""; rTpost = "lẻ";
            break;
        case 1:
            rT = "mười"; rTpost = "";
            break;
        case 2:
            rT = "hai"; rTpost = "mươi";
            break;
        case 3:
            rT = "ba"; rTpost = "mươi";
            break;
        case 4:
            rT = "bốn"; rTpost = "mươi";
            break;
        case 5:
            rT = "năm"; rTpost = "mươi";
            break;
        case 6:
            rT = "sáu"; rTpost = "mươi";
            break;
        case 7:
            rT = "bảy"; rTpost = "mươi";
            break;
        case 8:
            rT = "tám"; rTpost = "mươi";
            break;
        case 9:
            rT = "chín"; rTpost = "mươi";
            break;
    }

    switch (unit) {
        case 0:
            rU = "";
            break;
        case 1:
            rU = "mốt";
            break;
        case 2:
            rU = "hai";
            break;
        case 3:
            rU = "ba";
            break;
        case 4:
            rU = "bốn";
            break;
        case 5:
            rU = "lăm";
            break;
        case 6:
            rU = "sáu";
            break;
        case 7:
            rU = "bảy";
            break;
        case 8:
            rU = "tám";
            break;
        case 9:
            rU = "chín";
            break;
    }

    if (ten == 0 && unit == 0) {
        rTpost = "";
    }

    if ((ten == 1 || ten == 0) && unit != 0) {
        if (unit == 1) {
            rU = "một";
        }
    }

    document.getElementById("kqBai3").innerHTML = `${rH} ${rHpost} ${rT} ${rTpost} ${rU}`;
}
