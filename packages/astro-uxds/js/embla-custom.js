//******************Custom Settings for the Embla Articles Carousel on the home page **************//
const wrap = document.querySelector(".embla");
const viewPort = wrap.querySelector(".embla__viewport");
const prevBtn = wrap.querySelector(".embla__button--prev");
const nextBtn = wrap.querySelector(".embla__button--next");
const dots = document.querySelector(".embla__dots");
const embla = EmblaCarousel(viewPort, {
  loop: false,
  skipSnaps: false,
  containScroll: "trimSnaps",
  align: "start",
});

//arrows
const disablePrevNextBtns = (prevBtn, nextBtn, embla) => {
  return () => {
    if (embla.canScrollPrev()) prevBtn.removeAttribute("disabled");
    else prevBtn.setAttribute("disabled", "disabled");

    if (embla.canScrollNext()) nextBtn.removeAttribute("disabled");
    else nextBtn.setAttribute("disabled", "disabled");
  };
};
const setupPrevNextBtns = (prevBtn, nextBtn, embla) => {
  prevBtn.addEventListener("click", embla.scrollPrev, false);
  nextBtn.addEventListener("click", embla.scrollNext, false);
};
const disable = disablePrevNextBtns(prevBtn, nextBtn, embla);

//dots
// const setupDots = (dotsArray, embla) => {
//   dotsArray.forEach((dotNode, i) => {
//     dotNode.addEventListener('click', () => embla.scrollTo(i), false);
//   });
// };

// const generateDots = (dots, embla) => {
//   const template = document.getElementById('embla-dot-template').innerHTML;
//   dots.innerHTML = embla.scrollSnapList().reduce((acc) => acc + template, '');
//   return [].slice.call(dots.querySelectorAll('.embla__dot'));
// };

// const selectDot = (dotsArray, embla) => () => {
//   const previous = embla.previousScrollSnap();
//   const selected = embla.selectedScrollSnap();
//   dotsArray[previous].classList.remove('is-selected');
//   dotsArray[selected].classList.add('is-selected');
// };

// const dotsArray = generateDots(dots, embla);
// const setSelectedDotBtn = selectDot(dotsArray, embla);

setupPrevNextBtns(prevBtn, nextBtn, embla);
// setupDots(dotsArray, embla);

embla.on("select", disable);
embla.on("init", disable);
