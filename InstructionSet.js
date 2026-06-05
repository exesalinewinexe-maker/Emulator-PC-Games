// Emulator-PC-Games — InstructionSet.js
// Central instruction set used across the entire system

export const InstructionSet = {
    // Game launching
    LAUNCH: "launch_game",

    // Cloud gaming
    CLOUD_START: "cloud_start",
    CLOUD_STOP: "cloud_stop",

    // Virtual machine execution
    VM_START: "vm_start",
    VM_STOP: "vm_stop",

    // Platform detection
    DETECT_PLATFORM: "detect_platform",

    // UI operations
    UI_SHOW_GAME: "ui_show_game",
    UI_ERROR: "ui_error",

    // System operations
    LOAD_GAMES: "load_games",
    REFRESH: "refresh_system",

    // Apple devices
    IOS_LAUNCH: "ios_launch",
    IPAD_LAUNCH: "ipad_launch",

    // Android
    ANDROID_LAUNCH: "android_launch",

    // Desktop OS
    WINDOWS_LAUNCH: "windows_launch",
    LINUX_LAUNCH: "linux_launch",
    MACOS_LAUNCH: "macos_launch"
};