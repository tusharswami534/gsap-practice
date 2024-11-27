gsap.registerPlugin(ScrollTrigger);


gsap.fromTo(
    ".hero-section-text",{
        opacity: 0,
        x: 100,
    }, {
        opacity: 1,
        x: 0,
        yoyo: true,
        repeat: -1,
    }
    )


const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#section",
    start: "top top", 
    end: "bottom top", 
    scrub: 1, 
    pin : true,
    markers: true 
  }
});


tl.fromTo(
  ".hero-text", 
  { xPercent  : 35}, 
  { xPercent: -35,
     duration: 1.0,
     ease: "power4.in",
    } 
);
const newtl = gsap.timeline({
  scrollTrigger: {
    trigger: "#sectionthree",
    start: "top top", 
    end: "bottom top", 
    scrub: 1, 
    pin : true,
    markers: true 
  }
});

newtl.fromTo(
  ".text", 
  { xPercent  : -100}, 
  { xPercent: 45,
    stagger: 0.1,
     duration: 1.0,
    } 
);

const mm = gsap.matchMedia();

mm.add("(max-width: 768px)", () => {
const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#sectionfour",
    start: "top top", 
    end: "bottom top", 
    scrub: 1, 
    pin : true,
    markers: true 
  }
});
timeline.fromTo(
  ".fourbox", 
  { xPercent  : -100}, 
  { xPercent: 45,
    stagger: 0.1,
     duration: 1.0,
    } 
);
})
