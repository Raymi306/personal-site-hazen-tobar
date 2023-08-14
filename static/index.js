const DELAY_MS = 7000;
const SLIDES = [
  {
    src: "recent/the_encounter/1/the-encounter-1.jpg",
    label: "RECENT PROJECTS / THE ENCOUNTER: AKRON",
    alt: "A photograph from The Encounter",
  },
  {
    src: "recent/anything_goes/1/anything-goes-1.jpg",
    label: "RECENT PROJECTS / ANYTHING GOES",
    alt: "A photograph from Anything Goes", // give better alt descriptions
  },
  
  {
    src: "recent/matilda/1/matilda-1.jpg",
    label: "RECENT PROJECTS / MATILDA",
    alt: "A photograph from Matilda",
  },
  { 
    src: "recent/astro/1/astro-1.jpg",
    label: "RECENT PROJECTS / ASTROPHOTOGRAPHY",
    alt: "A photograph of the Moon",
  },
]
let slideIndex = 0;
let timeout = null;

const SLIDE = document.getElementById("background-image");
const LABEL = document.getElementById("image-label");
const TRANSITION_EFFECT = new KeyframeEffect(
  SLIDE,
  [
    { opacity: 0, },
    { opacitY: 1, },
  ],
  700 //ms
);
const ANIMATION = new Animation(TRANSITION_EFFECT, document.timeline);

ANIMATION.play();

function nextSlide(n) {
  // have to compensate for the fact that showSlides
  // is incrementing by 1 each invocation
  ANIMATION.cancel();
  ANIMATION.play();
  if (n !== 1) { slideIndex -= 2; }
  clearTimeout(timeout);
  showSlides();
}

function showSlides() {
  if (slideIndex >= SLIDES.length) { slideIndex = 0 }
  if (slideIndex < 0) { slideIndex = SLIDES.length - 1 }
  const nextSlide = SLIDES[slideIndex];
  SLIDE.src = nextSlide.src;
  SLIDE.alt = nextSlide.alt;
  LABEL.innerText = nextSlide.label;
  slideIndex++;
  ANIMATION.play();
  timeout = setTimeout(showSlides, DELAY_MS);
}

showSlides(slideIndex);
