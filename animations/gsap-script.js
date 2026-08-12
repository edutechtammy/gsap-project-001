
// Import local character builder functions
import { buildJoeBlink } from './joe/joeAloopBlink.js';   // Imports the stub
import { buildJoeSteam } from './joe/joeAloopSteam.js';
import { buildJoeIdle } from './joe/joeIdle.js';
import { buildJoeLift } from './joe/joeLift.js'; // Imports the stub
import { buildJoeSip } from './joe/joeSip.js';   // Imports the stub

// Register GSDevTools with GSAP
if (typeof GSDevTools !== "undefined") {
    gsap.registerPlugin(GSDevTools);
}

export const joe = {
    init() {
        this.steam = buildJoeSteam(); // Working loop
        this.idle = buildJoeIdle();   // Working loop
        this.blink = buildJoeBlink(); // Ambient blink
    },

    lift() {
        // Works safely today; when you flesh out joeLift.js, it just plays!
        return buildJoeLift();
    },

    sip() {
        return buildJoeSip();
    }
};

// 2. Initialize and attach GSDevTools once the DOM is ready
// Initialize immediately (Modules already defer execution until HTML parsing is complete)
joe.init();

const masterTL = gsap.timeline();
masterTL.add(joe.idle)
    .add(joe.steam, 0);

// Attach GSDevTools safely if present
if (typeof GSDevTools !== "undefined") {
    GSDevTools.create({ animation: masterTL });
}




