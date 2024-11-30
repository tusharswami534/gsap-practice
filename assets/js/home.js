
gsap.registerPlugin(ScrollTrigger);

gsap.to("#scroll-line", {
  width: "100%", 
  scrollTrigger: {
    trigger: "#section-to-pin",
    start: "top top", 
    end: "bottom top", 
    scrub: true, 
  },
});
