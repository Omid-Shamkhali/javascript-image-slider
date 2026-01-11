let btnNext=document.getElementsByClassName('next')[0]
let btnPrev=document.getElementsByClassName('prev')[0]
let imgSliderElem=document.getElementsByClassName('img-slider')[0]
let sourceImages=['image/1.jpg','image/2.png','image/3.jpg']

//--------------------

window.addEventListener("load",(e)=>{
    imgSliderElem.src=sourceImages[0]
})
//--------------------

var index=0
function nextSlide(){
index++
if(index >=sourceImages.length){
    index=0
}
imgSliderElem.src=sourceImages[index]
}
//--------------------

function prevSlide(){
    index--
   if(index<0){
    index=sourceImages.length-1
   }
   imgSliderElem.src=sourceImages[index]
}
//--------------------

setInterval(nextSlide,4000)
btnNext.addEventListener('click',nextSlide)
btnPrev.addEventListener('click',prevSlide)