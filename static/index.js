const DELAY_MS = 7000;

// Could I make up an attribute on the images in the template instead?
// Probably.
const SLIDE_LABELS = [
    "RECENT PROJECTS / WHITE CHRISTMAS",
    "RECENT PROJECTS / ANYTHING GOES",
    "RECENT PROJECTS / MATILDA",
    "RECENT PROJECTS / ASTROPHOTOGRAPHY",
]
const LABEL = document.getElementById("image-label");

let currentSlide = document.getElementById("slide-1");
let slideIndex = 0;
let timeout = null;

function nextSlide(n) {
  // have to compensate for the fact that showSlides
  // is incrementing by 1 each invocation
  if (n !== 1) { slideIndex -= 2; }
  clearTimeout(timeout);
  showSlides();
}

function showSlides() {
  if (slideIndex >= SLIDE_LABELS.length) { slideIndex = 0 }
  if (slideIndex < 0) { slideIndex = SLIDE_LABELS.length - 1 }
  const nextSlideLabel = SLIDE_LABELS[slideIndex];
  const nextSlide = document.getElementById("slide-" + (slideIndex + 1));

  currentSlide.className = "nodisplay";
  currentSlide = nextSlide;
  currentSlide.className = "background-image";

  LABEL.innerText = nextSlideLabel;
  slideIndex++;
  timeout = setTimeout(showSlides, DELAY_MS);
}

showSlides(slideIndex);
