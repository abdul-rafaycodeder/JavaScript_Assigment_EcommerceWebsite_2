gsap.registerPlugin(ScrollTrigger);

gsap.from("nav", {
    y: -80,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from("#hero-img img", {
    scale: 1.1,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
});

gsap.utils.toArray("section, #mina, #mina2, #mina3, #mina4").forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
});


gsap.utils.toArray("button").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        gsap.to(btn, { scale: 1.05, duration: 0.2 });
    });
    btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { scale: 1, duration: 0.2 });
    });
});
