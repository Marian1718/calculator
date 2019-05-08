const display = document.querySelector('.display');
const digits = document.querySelectorAll('.digits button');
digits.forEach(btn =>btn.addEventListener('click',digitPressed));
function digitPressed(e){
    e.preventDefault();
    display.value += e.target.innerText;
}
const opers = document.querySelectorAll('.operators button');
opers.forEach(btn =>btn.addEventListener('click',operPressed));
function operPressed(e){
    e.preventDefault();
    display.value += e.target.innerText;
}
document.querySelector('.equal').addEventListener('click', equalPressed);
function equalPressed(e){
    e.preventDefault();
   display.value = eval(display.value);
}
document.querySelector('.clear').addEventListener('click',clearPressed);
function clearPressed(e){
    e.preventDefault();
    display.value = '';
}
document.querySelector('.point').addEventListener('click',pointPressed);
function pointPressed(e){
    e.preventDefault();
    display.value+= e.target.innerText;
}
