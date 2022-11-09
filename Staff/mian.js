const slider = document.getElementById('slider')
const sliderSection = document.getElementsByClassName('slider-section');
let sliderSectionLast = sliderSection[sliderSection.length -1];
const btnleft= document.getElementById('btn-left');
const btnright= document.getElementById('btn-right');


slider.insertAdjacentElement('afterbegin',sliderSectionLast);

function Next(){
    let sliderSectionFirts = sliderSection[0];
    slider.style.marginLeft="-200%";
    slider.style.transition="all 0.5s"
    document.getElementsByClassName('staff-title-title')[0].style.backgroundColor=document.getElementsByClassName('slider-section-body')[2].style.backgroundColor;
    setTimeout(() => {
        slider.style.transition="none";
        
        slider.insertAdjacentElement('beforeend',sliderSectionFirts);
        slider.style.marginLeft="-100%";
    }, 500);
}    
function Prev(){
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft="0";
    slider.style.transition="all 0.5s"
    document.getElementsByClassName('staff-title-title')[0].style.backgroundColor=document.getElementsByClassName('slider-section-body')[0].style.backgroundColor;
    setTimeout(() => {
        slider.style.transition="none";
        slider.insertAdjacentElement('afterbegin',sliderSectionLast);
        slider.style.marginLeft="-100%";
    }, 500);
}

btnright.addEventListener('click', function(){
    Next();
});
btnleft.addEventListener('click', function(){
    Prev();
});
/*Formulario */