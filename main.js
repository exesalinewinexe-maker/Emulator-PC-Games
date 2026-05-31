// main.js — Emulator Bootloader

import { Emulator } from "./Emulator.js";

// Wait for the DOM to be ready
window.addEventListener("DOMContentLoaded", () => {
    // Create emulator instance, using a canvas with id "screen"
    const emulator = new Emulator("screen", 320, 240);

    // Example: tiny dummy program (you can replace this later)
    const program = new Uint8Array([
        // 0x01, 0x05,  // LOAD A, 5
        // 0x02, 0x03,  // LOAD B, 3
        // 0x03,        // ADD A + B
        // 0xFF         // HALT
    ]);

    emulator.loadProgram(program, 0);

    // Start the emulator
    emulator.start();

    // Expose for debugging in console
    window.emulator = emulator;
});