// Emulator-PC-Games — streaming.js
// Cloud gaming engine for iPhone, iPad, Android, and fallback platforms

import { InstructionSet } from "./InstructionSet.js";

let activeSession = null;

// Start a cloud gaming session
export function startCloudSession(game) {
    log("Starting cloud gaming session for: " + game.name);

    // Simulated cloud session object
    activeSession = {
        game: game.name,
        status: "running",
        startedAt: Date.now()
    };

    // In a real system, this is where you'd connect to:
    // - Moonlight / Sunshine
    // - Parsec
    // - Steam Remote Play
    // - Xbox Cloud Gaming
    // - Custom WebRTC streaming server

    log("Cloud session active for " + game.name);
    return InstructionSet.CLOUD_START;
}

// Stop cloud gaming session
export function stopCloudSession() {
    if (!activeSession) {
        log("No active cloud session to stop");
        return InstructionSet.CLOUD_STOP;
    }

    log("Stopping cloud session for: " + activeSession.game);
    activeSession = null;

    return InstructionSet.CLOUD_STOP;
}

// Check if cloud session is active
export function isCloudActive() {
    return activeSession !== null;
}

// Internal log helper
function log(msg) {
    console.log("[STREAMING] " + msg);

    const box = document.getElementById("status-text");
    if (box) box.textContent = msg;
}