// Memory.js — Virtual RAM Module

export class Memory {
    constructor(size = 1024) {
        this.size = size;
        this.data = new Uint8Array(size);
    }

    // Write a single byte
    write(address, value) {
        if (address < 0 || address >= this.size) {
            console.error("Memory write out of bounds:", address);
            return;
        }
        this.data[address] = value & 0xFF;
    }

    // Read a single byte
    read(address) {
        if (address < 0 || address >= this.size) {
            console.error("Memory read out of bounds:", address);
            return 0;
        }
        return this.data[address];
    }

    // Load an entire program or data block
    loadBlock(startAddress, block) {
        if (startAddress + block.length > this.size) {
            console.error("Memory block load out of bounds");
            return;
        }
        this.data.set(block, startAddress);
    }

    // Reset memory to zero
    clear() {
        this.data.fill(0);
    }

    // Debug: dump memory as hex
    dump(start = 0, end = this.size) {
        let out = "";
        for (let i = start; i < end; i++) {
            out += this.data[i].toString(16).padStart(2, "0") + " ";
        }
        console.log(out.trim());
    }
}