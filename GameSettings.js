// Emulator-PC-Games — GameSettings.js
// Real-time settings applied while playing a PC game

export const GameSettings = {
    graphics: {
        resolution: "1920x1080",
        fullscreen: true,
        vsync: false,
        fpsLimit: 60,
        quality: "high" // low, medium, high, ultra
    },

    performance: {
        cpuBoost: true,
        gpuBoost: true,
        batterySaver: false,
        dynamicScaling: true
    },

    streaming: {
        bitrate: 20000,
        fps: 60,
        latencyMode: "low", // low, balanced, high
        packetSize: "auto"
    },

    controls: {
        inputMode: "auto", // keyboard, controller, touch, auto
        sensitivity: 1.0,
        invertY: false,
        vibration: true
    },

    audio: {
        master: 100,
        music: 70,
        effects: 90,
        voice: 100,
        spatialAudio: true
    }
};