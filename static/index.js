const delayMs = 7000;
const transitionAnimation = "fade 1s";
const slides = [
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

const slide = document.getElementById("background-image");
slide.addEventListener("animationend", () => {
  slide.style.animationPlayState = "paused";
  slide.style.animation = "";
});
const label = document.getElementById("image-label");

showSlides(slideIndex);

function nextSlide(n) {
  slide.style.animation = "paused";
  // have to compensate for the fact that showSlides
  // is incrementing by 1 each invocation
  if (n !== 1) { slideIndex -= 2; }
  clearTimeout(timeout);
  showSlides();
}

function showSlides() {
  if (slideIndex >= slides.length) { slideIndex = 0 }
  if (slideIndex < 0) { slideIndex = slides.length - 1 }
  const nextSlide = slides[slideIndex];
  slide.src = nextSlide.src;
  slide.alt = nextSlide.alt;
  label.innerText = nextSlide.label;
  slide.style.animation = transitionAnimation;
  slide.style.animationPlayState = "running";
  slideIndex++;
  timeout = setTimeout(showSlides, delayMs);
} 
