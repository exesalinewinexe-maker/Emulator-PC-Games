// Emulator.js — Main Emulator Controller

import { CPU } from "./CPU.js";
import { Memory } from "./Memory.js";
import { Bus } from "./Bus.js";
import { GPU } from "./GPU.js";
import { Renderer } from "./Renderer.js";

export class Emulator {
    constructor(canvasId, width = 320, height = 240) {
        // Core components
        this.memory = new Memory(1024);
        this.bus = new Bus(this.memory);
        this.cpu = new CPU(1024);
        this.gpu = new GPU(width, height);
        this.renderer = new Renderer(canvasId, width, height);

        // Timing
        this.running = false;
        this.frameInterval = 1000 / 60; // 60 FPS
    }

    // Load a program (array of bytes)
    loadProgram(program, start = 0) {
        this.bus.loadProgram(program, start);
        this.cpu.registers.PC = start;
    }

    // One CPU step
    step() {
        const opcode = this.bus.read(this.cpu.registers.PC);
        this.cpu.registers.PC++;
        this.cpu.execute(opcode);
    }

    // One frame of GPU rendering
    renderFrame() {
        this.gpu.renderTo(this.renderer);
    }

    // Main loop
    start() {
        if (this.running) return;
        this.running = true;

        const loop = () => {
            if (!this.running) return;

            // CPU executes instructions
            this.step();

            // GPU draws the frame
            this.renderFrame();

            // Schedule next frame
            setTimeout(loop, this.frameInterval);
        };

        loop();
    }

    stop() {
        this.running = false;
    }
}