// js/animations/joe/joeSip.js

export function buildJoeSip() {
    // Create a paused timeline ready to play forward/reverse on hover
    const SipTL = gsap.timeline({ paused: true, reversed: true });

    SipTL
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

    return SipTL;
}
