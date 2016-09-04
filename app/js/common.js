// СЛАЙДЕР
var slideIndex=1;

showSlides(slideIndex);

function currentSlide(n) {
    slideIndex=n;
    showSlides(slideIndex);
}

function showSlides(n){

    var slides=document.querySelectorAll('.slider-item');
    var description=document.querySelectorAll('.slider-item__descr');
    var dots=document.querySelectorAll('.slider-dots__dot');

    if(n>slides.length){
        slideIndex=1;
    }
    if(n<1){
        slideIndex=slides.length;
    }
    for(var i=0; i<slides.length; i++){
        slides[i].style.display='none';
        slides[i].classList.remove('fade');
    }

    for(var z=0; z<description.length; z++){
        description[z].style.display='none';
    }
    for(var j=0; j<dots.length; j++){
        dots[j].classList.remove('slider-dots__dot--active');
    }

    description[slideIndex-1].style.display='block';
    slides[slideIndex-1].style.display='block';
    slides[slideIndex-1].classList.add('fade');
    dots[slideIndex-1].classList.add('slider-dots__dot--active');
}