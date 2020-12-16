const slideshowImages = document.querySelectorAll(".slide .image-slideshow");

const nextImageDelay = 6000; // I changed this to 6000. -Scotty Lucas
let currentImageCounter = 0;

slideshowImages[currentImageCounter].style.display = "block";

setInterval(nextImage, nextImageDelay);

function nextImage() {
  slideshowImages[currentImageCounter].style.display = "none";
  currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
  slideshowImages[currentImageCounter].style.display = "block";
}

function displayPreviousImage(){
  slideshowImages[currentImageCounter].style.display = "none";
  if(currentImageCounter == 0){
    currentImageCounter = slideshowImages.length - 1;
  }
  else{
    currentImageCounter = currentImageCounter - 1;
  }
  slideshowImages[currentImageCounter].style.display = "block";
}