// Renderer.js — Canvas Rendering System

export class Renderer {
    constructor(canvasId, width = 320, height = 240) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) {
            throw new Error("Renderer: Canvas element not found: " + canvasId);
        }

        this.canvas.width = width;
        this.canvas.height = height;

        this.ctx = this.canvas.getContext("2d");
        if (!this.ctx) {
            throw new Error("Renderer: Failed to get 2D context");
        }

        // Create a pixel buffer
        this.imageData = this.ctx.createImageData(width, height);
        this.width = width;
        this.height = height;
    }

    // Draw a single pixel (r, g, b)
    setPixel(x, y, r, g, b) {
        if (x < 0 || x >= this.width || y < 0 || y >= this.height) return;

        const index = (y * this.width + x) * 4;
        this.image