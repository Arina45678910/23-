let poem = document.querySelectorAll('.poem__item');
let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    for (let i = 0; i < poem.length; i++) {
        poem[i].classList.remove('active');
    }
    let index = Math.round(Math.random() * (poem.length - 1));
    poem[index].classList.add('active');
})