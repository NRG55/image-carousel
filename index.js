const images = document.querySelectorAll("[data-image]");
const buttonNext = document.getElementById("button-next");
const buttonPrevious = document.getElementById("button-previous");
const roundButtons = document.querySelectorAll(".round-buttons-container > button");
const slider = document.querySelector(".slider");
let currentIndex = 0;

images.forEach((div) => {   
    div.style.backgroundImage = `url(./images/${div.getAttribute("data-image")})`;
});

const slide = (index) => {   
    if (index < 0) {
        index = 0;        
    };

    if (index >= images.length - 1) {
        index = images.length - 1;        
    };    
    
    roundButtons[currentIndex].classList.remove("active");
    roundButtons[index].classList.add("active");
    slider.style.transform = `translateX(-${(index / images.length) * 100}%)`;
    currentIndex = index;   
};

buttonNext.onclick = () => {     
    slide(currentIndex + 1);
};

buttonPrevious.onclick = () => {   
    slide(currentIndex - 1);
};

roundButtons.forEach((button, index) => {   
    button.addEventListener("click", () => {      
        slide(index);
    });
});

roundButtons[0].classList.add("active");




