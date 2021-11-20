function slidesPlugin(activeSlides){
    const slides = document.querySelectorAll('.slide');

    slides[activeSlides].classList.add('active');

    for (const slide of slides){
        slide.addEventListener('click', () =>{
            cleanActiveClasses();
            slide.classList.add('active');
        })
    }
    function cleanActiveClasses(){
        slides.forEach((slide)=>{
            slide.classList.remove('active')
        })
    }
}
slidesPlugin(2)