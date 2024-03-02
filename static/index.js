const DELAY_MS = 7000;

const LABELS = document.getElementsByClassName("image-label");
const SLIDES = document.getElementsByClassName("slide");

let currentSlide = SLIDES[0]
let currentLabel = LABELS[0]
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
  if (slideIndex >= LABELS.length) { slideIndex = 0 }
  if (slideIndex < 0) { slideIndex = LABELS.length - 1 }

  const nextLabel = LABELS[slideIndex];
  const nextSlide = SLIDES[slideIndex];

  currentSlide.classList.toggle("nodisplay")
  currentSlide.classList.toggle("background-image");
  currentSlide = nextSlide;
  currentSlide.classList.toggle("nodisplay")
  currentSlide.classList.toggle("background-image");

  currentLabel.classList.toggle("nodisplay");
  nextLabel.classList.toggle("nodisplay");
  currentLabel = nextLabel;
  slideIndex++;
  timeout = setTimeout(showSlides, DELAY_MS);
}

showSlides(slideIndex);
