
// js/animations/joe/joeAloopSteam.js
// Import GSAP if you are using ES modules/bundlers (optional if loaded via global <script> tag)

export function buildJoeSteam() {
    // 1. DOM Elements & Constants
    const steamTL = gsap.timeline({ repeat: -1 });

    // Set initial baseline properties first
    gsap.set("#joe-steam", {
        y: 0,
        x: 0,
        scaleX: 1,
        scaleY: 0.7,
        opacity: 0,
        transformOrigin: "bottom center"
    });


    // Chain clean keyframe steps directly onto the timeline
    steamTL.to("#joe-steam", {
        y: -13,
        x: 3,
        scaleX: 0.5,
        scaleY: 1,
        opacity: 0.2,
        duration: 2.0,
        ease: "sine.in"
    })
        .to("#joe-steam", {
            y: -25,
            x: -3,
            scaleX: -1,
            scaleY: 2,
            opacity: 0,
            duration: 3.2,
            ease: "sine.out"
        });

    return steamTL;
}


