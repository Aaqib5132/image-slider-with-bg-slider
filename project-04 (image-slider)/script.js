const slides = document.querySelectorAll('.slide-container')
const button = document.getElementsByClassName('btn')
const left = document.getElementById('left-arrow')
const right = document.getElementById('right-arrow')
const body = document.body;
const active = document.getElementsByClassName('try')

let slide = 0;
console.log(button)

function bgchange(){
    body.style.backgroundImage = slides[slide].style.backgroundImage
    slides.forEach(panel =>{
        panel.classList.remove('active')

    })
    slides[slide].classList.add('active')
}
right.addEventListener('click', () => {
    slide++
    if(slide>=slides.length){
        slide=0;
    }
    console.log(slide)
    bgchange();

})
console.log(button)
left.addEventListener('click', () => {
    slide--
    if(slide<0){
        slide=slides.length-1
    }
    console.log(slide)
    bgchange();

})
console.log(slides.length)


