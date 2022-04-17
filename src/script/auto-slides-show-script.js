//main slide show
var slideIndex = 0;
autoShowSlides();

function autoShowSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    /*console.log(slides[i]);*/
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
    console.log("count:" + slideIndex);
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(autoShowSlides, 30000); // Change image every 30 seconds
  console.log(slideIndex);
}
