var slideIndex = 1;
showSlides(slideIndex);

function plusSliders(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
};

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("production-img");
    var dots = document.getElementsByClassName("production-dot");

    if (n > slides.length){
        slideIndex = 1
    }
    if (n < 1){
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
};

  
var width = 300; // ширина изображения
var count = 1; // количество изображений

var carousel = document.getElementById('carousel');
var list = carousel.querySelector('ul');
var listElems = carousel.querySelectorAll('li');

var position = 0; // текущий сдвиг влево

carousel.querySelector('.comment-prev').onclick = function() {
    // сдвиг влево
    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    position = Math.min(position + width * count, 0)
    list.style.marginLeft = position + 'px';
};

carousel.querySelector('.comment-next').onclick = function() {
    // сдвиг вправо
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    position = Math.max(position - width * count, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
};