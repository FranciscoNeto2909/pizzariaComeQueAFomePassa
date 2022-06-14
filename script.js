const btnLeft = document.getElementById("btn-left")
const btnRight = document.getElementById("btn-right")
const slider = document.getElementById("slider")
const totalSlides = document.querySelectorAll(".slider-item").length
let slideAtual = 0
console.log(totalSlides)
slider.style.width = `calc(100vw * ${totalSlides})`

function move() {
    const sliderItemWidth = document.querySelector(".slider-item").clientWidth
    const novaMargin = (slideAtual * sliderItemWidth)
    slider.style.marginLeft = `-${novaMargin}px`
}

setInterval(()=>{
    slideAtual--;
    if (slideAtual < 0) {
        slideAtual = totalSlides - 1
    }
    move()
},1500)