// GPU.js — Virtual Graphics Processor

export class GPU {
    constructor(width = 320, height = 240) {
        this.width = width;
        this.height = height;

        // Framebuffer: stores RGB values for each pixel
        this.framebuffer = new Uint8Array(width * height * 3);
    }

    // Set a pixel in the framebuffer
    setPixel(x, y, r, g, b) {
        if (x < 0 || x >= this.width || y < 0 || y >= this.height) return;

        const index = (y * this.width + x) * 3;
        this.framebuffer[index] = r;
        this.framebuffer[index + 1] = g;
        this.framebuffer[index + 2] = b;
    }

    // Clear framebuffer to black
    clear() {
        this.framebuffer.fill(0);
    }

    // Send framebuffer to Renderer.js
    renderTo(renderer) {
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                const index = (y * this.width + x) * 3;
                const r = this.framebuffer[index];
                const g = this.framebuffer[index + 1];
                const b = this.framebuffer[index + 2];

                renderer.setPixel(x, y, r, g, b);
            }
        }

        renderer.render();
    }
}