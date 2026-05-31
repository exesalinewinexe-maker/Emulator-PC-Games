// Display.js — Wrapper for GPU + Renderer

import { GPU } from "./GPU.js";
import { Renderer } from "./Renderer.js";

export class Display {
    constructor(canvasId, width = 320, height = 240) {
        this.width = width;
        this.height = height;

        // GPU handles the framebuffer
        this.gpu = new GPU(width, height);

        // Renderer draws the framebuffer to the canvas
        this.renderer = new Renderer(canvasId, width, height);
    }

    // Clears the screen (GPU + Renderer)
    clear() {
        this.gpu.clear();
        this.renderer.clear();
    }

    // Draws the current GPU framebuffer to the canvas
    render() {
        this.gpu.renderTo(this.renderer);
    }

    // Allows resizing the display dynamically
    resize(width, height) {
        this.width = width;
        this.height = height;

        this.gpu.resize(width, height);
        this.renderer.resize(width, height);
    }

    // Returns the GPU framebuffer for CPU or Bus access
    getFrameBuffer() {
        return this.gpu.framebuffer;
    }
}