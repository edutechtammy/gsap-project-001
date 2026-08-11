
// js/animations/joe/index.js
import { buildJoeBlink } from './joe/joeAloopBlink.js';   // Imports the stub
import { buildJoeSteam } from './joe/joeAloopSteam.js';
import { buildJoeIdle } from './joe/joeIdle.js';
import { buildJoeLift } from './joe/joeLift.js'; // Imports the stub
import { buildJoeSip } from './joe/joeSip.js';   // Imports the stub

export const joe = {
    init() {
        this.steam = buildJoeSteam(); // Working loop
        this.idle = buildJoeIdle();   // Working loop
    },

    lift() {
        // Works safely today; when you flesh out joeLift.js, it just plays!
        return buildJoeLift();
    },

    sip() {
        return buildJoeSip();
    }
};