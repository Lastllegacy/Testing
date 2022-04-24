import Inputmask from "inputmask/dist/inputmask.es6.js";
import flatpickr from "flatpickr";

const maskInputString = document.getElementById ('input-mask-text');

// const im = new Inputmask("99.99.9999")
// im.mask(maskInputString);

Inputmask("99.99.9999", {
   placeholder: "ДД.ММ.ГГГГ",
}).mask(maskInputString)

let wholeBlock = document.querySelector('.input-and-arrow')
const date = document.getElementById('date-test')

flatpickr(date,{
   dateFormat: 'd.m.Y',
})





