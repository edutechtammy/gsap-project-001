// js/animations/joe/joeLift.js

export function buildJoeLift() {
    // Create a paused timeline ready to play forward/reverse on hover
    const liftTL = gsap.timeline({ paused: true, reversed: true });

    liftTL
        // Rotate/lift arm up towards mouth
        .to("#joe-lower-arm", {
            rotation: -25,
            transformOrigin: "bottom right",
            duration: 0.6,
            ease: "power2.out"
        })
        // Adjust cup angle so coffee doesn't spill mid-air
        .to("#joe-cup", {
            rotation: 10,
            transformOrigin: "center center",
            duration: 0.6,
            ease: "power2.out"
        }, 0); // Start at same time as arm movement

    return liftTL;
}