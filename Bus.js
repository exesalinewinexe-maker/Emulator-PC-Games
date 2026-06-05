# // Bus.js — Connects CPU and Memory

export class Bus {
    constructor(memory) {
        this.memory = memory;
    }

    // Read a byte from memory
    read(address) {
        return this.memory.read(address);
    }

    // Write a byte to memory
    write(address, value) {
        this.memory.write(address, value);
    }

    // Load a program into memory starting at a specific address
    loadProgram(program, start = 0) {
        this.memory.loadBlock(start, program);
    }
}