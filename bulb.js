const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const light = document.querySelector('header');

btn1.addEventListener('click', function () {

    light.classList.toggle('stop');
    btn1.classList.add('stop');
    btn2.classList.remove('stop');
})

btn2.addEventListener('click', function () {

    light.classList.toggle('stop');
    btn1.classList.remove('stop');
    btn2.classList.add('stop');
})