// js/animations/joe/joeLift.js

export function buildJoeLift() {
    // Create a paused timeline ready to play forward/reverse on hover
    const liftTL = gsap.timeline({ paused: true, reversed: true });

    //y: -3,
    //duration: 1.8,
    //joe-arm-and-cup-group
    //ease: "sine.inOut"

    liftTL
        // lift arm up
        .to("#joe-arm-and-cup-group", {
            y: -30,
            x: -2,
            rotation: 5,
            duration: 1.0,
            ease: "sine.inOut"
        })
        // Adjust cup angle so coffee doesn't spill mid-air
        .to("#joe-arm", {
            y: 0,
            x:-1,
            rotation: 0,
            transformOrigin: "top center",
            duration: 1.0,
            ease: "power2.out"
        }, 0); 
        

    return liftTL;
}