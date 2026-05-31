// main.js — Emulator Bootloader (Polished)

import { Emulator } from "./Emulator.js";

window.addEventListener("DOMContentLoaded", () => {
    // Create emulator instance using the canvas with id "screen"
    const emulator = new Emulator("screen", 320, 240);

    // Optional: Load a program (empty by default)
    const program = new Uint8Array([]);
    emulator.loadProgram(program, 0);

    // Start the emulator loop
    emulator.start();

    // Expose for debugging
    window.emulator = emulator;
});