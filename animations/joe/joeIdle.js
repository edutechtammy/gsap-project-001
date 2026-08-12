// js/animations/joe/joeIdle.js

export function buildJoeIdle() {
    const idleTL = gsap.timeline({ repeat: -1, yoyo: true });

    // Subtle breathing / chest rise and head tilt
    idleTL
        // Subtle torso rise for breathing
        .to("#joe-torso", {
            y: -3,
            duration: 1.8,
            ease: "sine.inOut"
        })
        // Gentle head tilt happening alongside the breath
        .to("#joe-head", {
            rotation: 1.5,
            transformOrigin: "bottom center",
            duration: 1.8,
            ease: "sine.inOut"
        }, 0); // Position parameter '0' ensures both animate together

    return idleTL;
}