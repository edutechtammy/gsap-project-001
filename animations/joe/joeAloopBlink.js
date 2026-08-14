// js/animations/joe/joeAloopBlink.js

export function buildJoeBlink() {
    function playBlink() {
        // Generate a random delay between 2 and 6 seconds
        const randomDelay = gsap.utils.random(8, 18);
        
        // Generate a slightly randomized blink speed for realistic variation
        const randomDuration = gsap.utils.random(0.1, 0.18);

        gsap.to(["#his-right-eyelid", "#his-left-eyelid"], {
            y: 15,
            duration: randomDuration,
            yoyo: true,
            repeat: 1,
            delay: randomDelay,
            onComplete: playBlink // Trigger the next blink with a new random delay!
        });
    }

    // Kick off the loop
    playBlink();
}