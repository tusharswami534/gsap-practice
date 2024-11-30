// Ensure GSAP and ScrollTrigger are registered
gsap.registerPlugin(ScrollTrigger);

// Animate the progress line based on scroll
gsap.to("#scroll-line", {
  width: "100%", // Full width of the viewport
  scrollTrigger: {
    trigger: "#section-to-pin", // The section being tracked
    start: "top top", // Start tracking when the section reaches the top of the viewport
    end: "bottom top", // End tracking when the bottom of the section reaches the top of the viewport
    scrub: true, // Smooth animation during scroll
  },
});
