var minSlideIndex = 0;
minShowSlides();

function minShowSlides() {
  var i;
  var minSlides = document.getElementsByClassName("myMinSlides");
  for (i = 0; i < minSlides.length; i++) {
    minSlides[i].style.display = "none";
  }
  minSlideIndex++;
  if (minSlideIndex > minSlides.length) {
    minSlideIndex = 1;
  }
  minSlides[minSlideIndex - 1].style.display = "block";
  setTimeout(minShowSlides, 10000); // Change image every 5 seconds
}
