const imgs = document.querySelectorAll('.single-img-wrapper img');
const mainImgElement = document.querySelector('.s-p-large-img img');

function slideImage(imgSrc) {
    mainImgElement.classList.add('effect-hover');
    setTimeout(() => {
        mainImgElement.setAttribute('src', imgSrc);
        mainImgElement.classList.remove('effect-hover');
    }, 500);
}
imgs.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        const imgSrc = imgItem.getAttribute('src');
        slideImage(imgSrc);
    });
});