// Emulator-PC-Games — platform.js
// Detects Windows, Linux, macOS, Android, iPhone, and iPad

export function detectPlatform() {
    const ua = navigator.userAgent || navigator.vendor || window.opera;

    // Windows
    if (ua.includes("Windows NT")) {
        return "windows";
    }

    // Linux (desktop)
    if (ua.includes("Linux") && !ua.includes("Android")) {
        return "linux";
    }

    // macOS (Intel or Apple Silicon)
    if (ua.includes("Macintosh") || ua.includes("Mac OS X")) {
        return "macos";
    }

    // iPhone
    if (/iPhone/i.test(ua)) {
        return "ios";
    }

    // iPad (iPadOS reports as Mac sometimes)
    if (/iPad/i.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) {
        return "ipad";
    }

    // Android
    if (/Android/i.test(ua)) {
        return "android";
    }

    // Unknown → fallback to cloud gaming
    return "unknown";
}