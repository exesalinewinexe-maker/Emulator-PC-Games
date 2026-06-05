// Emulator-PC-Games — launcher.js
// Handles launching PC games across Windows, Linux, macOS, Android, and Apple mobile devices

import { detectPlatform } from "./platform.js";
import { startCloudSession } from "./streaming.js";
import { startVirtualMachine } from "./virtualization.js";

let games = [];

// Load games.json
async function loadGames() {
    const response = await fetch("./games.json");
    games = await response.json();
    games = games.games;
}

// Find game by name or short code
function findGame(query) {
    return games.find(g =>
        g.name.toLowerCase() === query.toLowerCase() ||
        (g.short && g.short.toLowerCase() === query.toLowerCase())
    );
}

// Main launcher
export async function launchGame(gameName) {
    await loadGames();

    const game = findGame(gameName);
    if (!game) {
        console.error("Game not found:", gameName);
        return;
    }

    const platform = detectPlatform();
    console.log("Launching:", game.name, "on", platform);

    switch (platform) {
        case "windows":
            launchWindows(game);
            break;

        case "linux":
            launchLinux(game);
            break;

        case "macos":
            launchMacOS(game);
            break;

        case "ios":
            launchIOS(game);
            break;

        case "ipad":
            launchIPad(game);
            break;

        case "android":
            launchAndroid(game);
            break;

        default:
            console.warn("Unknown platform. Using cloud fallback.");
            startCloudSession(game);
            break;
    }
}

// Windows launcher
function launchWindows(game) {
    console.log("Running Windows executable for:", game.name);
    // Placeholder for .exe launching
}

// Linux launcher
function launchLinux(game) {
    console.log("Launching via Linux compatibility layer:", game.name);
    // Placeholder for Proton/Wine/etc.
}

// macOS launcher
function launchMacOS(game) {
    console.log("Launching via macOS virtualization:", game.name);
    startVirtualMachine(game);
}

// iPhone launcher
function launchIOS(game) {
    console.log("iPhone detected — using cloud gaming.");
    startCloudSession(game);
}

// iPad launcher
function launchIPad(game) {
    console.log("iPad detected — using cloud gaming.");
    startCloudSession(game);
}

// Android launcher
function launchAndroid(game) {
    console.log("Android detected — using cloud gaming.");
    startCloudSession(game);
}