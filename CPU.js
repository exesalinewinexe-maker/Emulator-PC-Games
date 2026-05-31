// CPU.js — Virtual CPU Core

export class CPU {
    constructor(memorySize = 1024) {
        this.registers = {
            A: 0,
            B: 0,
            C: 0,
            D: 0,
            PC: 0,   // Program Counter
            SP: memorySize - 1 // Stack Pointer
        };

        this.memory = new Uint8Array(memorySize);
        this.running = false;
    }

    loadProgram(program) {
        this.memory.set(program, 0);
        this.registers.PC = 0;
    }

    fetch() {
        return this.memory[this.registers.PC++];
    }

    execute(opcode) {
        switch (opcode) {

            case 0x01: // LOAD A, value
                this.registers.A = this.fetch();
                break;

            case 0x02: // LOAD B, value
                this.registers.B = this.fetch();
                break;

            case 0x03: // ADD A + B
                this.registers.A = (this.registers.A + this.registers.B) & 0xFF;
                break;

            case 0x04: // STORE A → memory[address]
                const addr = this.fetch();
                this.memory[addr] = this.registers.A;
                break;

            case 0x05: // JMP address
                this.registers.PC = this.fetch();
                break;

            case 0xFF: // HALT
                this.running = false;
                break;

            default:
                console.error("Unknown opcode:", opcode);
                this.running = false;
        }
    }

    run() {
        this.running = true;
        while (this.running) {
            const opcode = this.fetch();
            this.execute(opcode);
        }
    }
}