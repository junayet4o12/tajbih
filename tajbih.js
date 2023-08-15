// subhanAllah
const subhanallahdisplay = document.getElementById('subhanallahdisplay');
const subhanallahincrement = document.getElementById('subhanallahincrement');
const subhanallahdecrement = document.getElementById('subhanallahdecrement');
const resetbtn1 = document.getElementById('resetbtn1');
// alhamdulillah

const alhamdulillahdisplay = document.getElementById('alhamdulillahdisplay');
const alhamdulillahincrement = document.getElementById('alhamdulillahincrement');
const alhamdulillahdecrement = document.getElementById('alhamdulillahdecrement');
const resetbtn2 = document.getElementById('resetbtn2');
// allahuakber

const allahuakberdisplay = document.getElementById('allahuakberdisplay');
const allahuakberincrement = document.getElementById('allahuakberincrement');
const allahuakberdecrement = document.getElementById('allahuakberdecrement');
const resetbtn3 = document.getElementById('resetbtn3');

const resetbtn = document.getElementById('resetbtn');

let subhanallahinitialvalue = 0;
let alhamdulillahinitialvalue = 0;
let allahuakberinitialvalue = 0;

subhanallahincrement.addEventListener('click', function () {
    if (subhanallahinitialvalue == 33) {
        return alert('you have done ')
    }
    subhanallahinitialvalue++;
    subhanallahdisplay.innerText = subhanallahinitialvalue;
})
subhanallahdecrement.addEventListener('click', function () {
    if (subhanallahinitialvalue == 0) {
        return alert('you can not add negative value')
    }
    subhanallahinitialvalue--;
    subhanallahdisplay.innerText = subhanallahinitialvalue;
})

// subhanallah done


alhamdulillahincrement.addEventListener('click', function () {
    if (alhamdulillahinitialvalue == 33) {
        return alert('you have done ')
    }
    alhamdulillahinitialvalue++;
    alhamdulillahdisplay.innerText = alhamdulillahinitialvalue;
})
alhamdulillahdecrement.addEventListener('click', function () {
    if (alhamdulillahinitialvalue == 0) {
        return alert('you can not add negative value')
    }
    alhamdulillahinitialvalue--;
    alhamdulillahdisplay.innerText = alhamdulillahinitialvalue;
})
// alhadulillah done
allahuakberincrement.addEventListener('click', function () {
    if (allahuakberinitialvalue == 33) {
        return alert('you have done ')
    }
    allahuakberinitialvalue++;
    allahuakberdisplay.innerText = allahuakberinitialvalue;
})
allahuakberdecrement.addEventListener('click', function () {
    if (allahuakberinitialvalue == 0) {
        return alert('you can not add negative value')
    }
    allahuakberinitialvalue--;
    allahuakberdisplay.innerText = allahuakberinitialvalue;
})
// allahuakbar done
resetbtn1.addEventListener('click', function () {
    subhanallahdisplay.innerText = '0';
    subhanallahinitialvalue = 0;
})
resetbtn2.addEventListener('click', function () {
    alhamdulillahdisplay.innerText = '0';
    alhamdulillahinitialvalue = 0;
})
resetbtn3.addEventListener('click', function () {
    allahuakberdisplay.innerText = '0';
    allahuakberinitialvalue = 0;
})
resetbtn.addEventListener('click', function () {
    subhanallahdisplay.innerText = '0';
    subhanallahinitialvalue = 0;
    alhamdulillahdisplay.innerText = '0';
    alhamdulillahinitialvalue = 0;
    allahuakberdisplay.innerText = '0';
    allahuakberinitialvalue = 0;
})