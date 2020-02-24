var res = document.getElementById("result");
function Addition() {
    var a = parseInt(document.getElementById("x").value);
    var b = parseInt(document.getElementById("y").value);
    if (isNaN(a)||isNaN(b)) {
        res.innerHTML= ' Dữ liệu không hợp lệ'
    } else {
        res.innerHTML = 'Result devision :'+ (a+b);
    }
}
function Substraction() {
    var a = parseInt(document.getElementById("x").value);
    var b = parseInt(document.getElementById("y").value);
    if (isNaN(a)||isNaN(b)) {
        res.innerHTML= ' Dữ liệu không hợp lệ'
    } else {
        res.innerHTML = 'Result devision :'+(a-b);
    }
}
function Multiplication() {
    var a = parseInt(document.getElementById("x").value);
    var b = parseInt(document.getElementById("y").value);
    if (isNaN(a)||isNaN(b)) {
        res.innerHTML= ' Dữ liệu không hợp lệ'
    } else {
        res.innerHTML = 'Result devision :'+(a*b);
    }
}
function Division() {
    var a = parseInt(document.getElementById("x").value);
    var b = parseInt(document.getElementById("y").value);
    if (isNaN(a)||isNaN(b)) {
        res.innerHTML= ' Dữ liệu không hợp lệ'
    } else if (b == 0) {
        res.innerHTML= 'Không có phép chia cho số 0'
    } else {
        res.innerHTML = 'Result devision :'+(a/b);
    }
}