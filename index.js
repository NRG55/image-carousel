const images = document.querySelectorAll("[data-image]");
const buttonNext = document.getElementById("button-next");
const buttonPrevious = document.getElementById("button-previous");
const slider = document.querySelector(".slider");
let slideDistance = 0;

images.forEach((div) => {
    console.log(div)
    console.log(div.getAttribute("data-image"))
    div.style.backgroundImage = `url(./images/${div.getAttribute("data-image")})`;
});

const slide = (direction) => {
    const imageSizeInPercent = (1 / images.length) * 100;   

    if (direction === "previous") {
        if (slideDistance < 0 || slideDistance === 0) {                
            slideDistance = 0;
            return
            };

        slideDistance -= imageSizeInPercent;
        slider.style.transform = `translateX(-${slideDistance}%)`;
        
        console.log(slideDistance)
        return;  
    } 

    slideDistance += imageSizeInPercent;
    slider.style.transform = `translateX(-${slideDistance}%)`;       
};

buttonNext.onclick = () => {   
    slide();
};

buttonPrevious.onclick = () => {   
    slide("previous");
};


