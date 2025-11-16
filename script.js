// You will need to write the Javascript for the carousel button functionality. We  provide only some example images. 

  let imageURLs = [
"https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdXB3azYxNzkxOTM5LXdpa2ltZWRpYS1pbWFnZS1rb3dic3dsMC5qcGc.jpg", 
"https://upload.wikimedia.org/wikipedia/commons/5/53/Lake_Kinney_mit_Mount_Whitehorn.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Russell_Falls_2.jpg/540px-Russell_Falls_2.jpg"  
  ];

const oldImg = document.querySelector(".carousel");
const newImg = document.createElement("img");

newImg.className = "carousel";
newImg.id = "0";
newImg.src = imageURLs[0];
oldImg.parentNode.replaceChild(newImg, oldImg);

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

function changeImage(step){
    const img = document.querySelector(".carousel");
    let currentIndex = parseInt(img.id, 10);
    currentIndex = currentIndex + step;

    if(currentIndex >= imageURLs.length){
        currentIndex = 0;
    }
    else if (currentIndex < 0){
        currentIndex = imageURLs.length -1;
    }
    img.id = String(currentIndex);
    img.src= imageURLs[currentIndex];
}

nextBtn.addEventListener("click", function(){
    changeImage(1);
});

prevBtn.addEventListener("click", function(){
    changeImage(-1);
});

//Bonus
function likeImage(){
    let likeButton = document.getElementById("likebtn");
    likeButton.src="https://cdn-icons-png.flaticon.com/128/833/833472.png";
}

document.getElementById("likebtn").onclick = likeImage;

let currentIndex = 0;
const carouselImg = document.querySelector(".carousel");

function showNext(){
    currentIndex = (currentIndex + 1) % imageURLs.length;
    carouselImg.src = imageURLs[currentIndex];
}

function showPrev(){
    currentIndex = (currentIndex - 1 + imageURLs.length) % imageURLs.length;
    carouselImg.src = imageURLs[currentIndex];
}

let startX = 0;
let endX = 0;
let isDragging = false;
let dragStartX = 0;
let dragEndX = 0;

carouselImg.ondragstart = () => false;

carouselImg.addEventListener("touchstart", function(e){
    startX = e.touches[0].clientX;
});

carouselImg.addEventListener("touchend", function(e){
    endX = e.changedTouches[0].clientX;
    let swipeDistance = endX - startX;
    if(swipeDistance<-50){
        showNext();
    }
    else if(swipeDistance > 50){
        showPrev();
    }
});

carouselImg.addEventListener("mousedown", function (e){
    isDragging = true;
    dragStartX = e.clientX;
});

carouselImg.addEventListener("mousemove", function(e){
    if(isDragging){
        dragEndX = e.clientX;
    }
});

carouselImg.addEventListener("mouseup", function(){
    if(!isDragging){
        return;
    }
    isDragging = false;
    let swipeDistance = dragEndX - dragStartX;
    if(swipeDistance < -50){
        showNext();
    }
    else if (swipeDistance > 50){
        showPrev();
    }
});