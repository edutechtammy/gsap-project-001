
// js/animations/joe/joeAloopSteam.js
// Import GSAP if you are using ES modules/bundlers (optional if loaded via global <script> tag)

export function buildJoeSteam() {
    // 1. DOM Elements & Constants
    const steamTL = gsap.timeline({ repeat: -1 });

    // 3. Animation Timelines & Logic
    steamTL.fromTo("#steam",
        // Step 1: Animate from initial state to middle keyframe
        {
            y: 0,
            x: 0,
            scaleX: 1,
            scaleY: 0.7,
            opacity: 0,
            transformOrigin: "bottom center"
        },
        // 2. Sequential keyframe array for the "to" states
        {
            keyframes: [
                {
                    y: -13,
                    x: 3,
                    scaleX: 0.5,
                    scaleY: 1,
                    opacity: 0.2,
                    duration: 2.0,
                    ease: "sine.in"
                },
                {
                    y: -25,
                    x: -3,
                    scaleX: -1,
                    scaleY: 2,
                    opacity: 0,
                    duration: 3.2,
                    ease: "sine.out"
                }
            ]
        }
    );

    return steamTL;
}


