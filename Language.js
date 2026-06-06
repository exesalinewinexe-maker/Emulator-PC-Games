// Emulator-PC-Games — Language.js
// Full language system: auto-detect device language → apply to app → apply to game → allow manual override

export const Language = {
    // Default values
    currentAppLanguage: "en",
    currentGameLanguage: "en",

    // Supported languages (your exact list, cleaned + standardized)
    supported: [
        "en", // English
        "es", // Español
        "fr", // French
        "de", // Deutsch
        "ru", // Russian
        "zh", // Chinese
        "ja", // Japanese
        "ko", // Korean
        "it", // Italian
        "pt"  // Portuguese
    ],

    // Detect device language (browser/OS)
    detectDeviceLanguage() {
        const lang = navigator.language || navigator.userLanguage;
        const short = lang.split("-")[0];

        if (this.supported.includes(short)) {
            return short;
        }

        return "en"; // fallback
    },

    // Initialize language system
    initialize() {
        const savedApp = localStorage.getItem("app_language");
        const savedGame = localStorage.getItem("game_language");

        // App language
        if (savedApp && this.supported.includes(savedApp)) {
            this.currentAppLanguage = savedApp;
        } else {
            this.currentAppLanguage = this.detectDeviceLanguage();
        }

        // Game language
        if (savedGame && this.supported.includes(savedGame)) {
            this.currentGameLanguage = savedGame;
        } else {
            this.currentGameLanguage = this.currentAppLanguage;
        }
    },

    // Manual override for app language
    setAppLanguage(lang) {
        if (!this.supported.includes(lang)) return;
        this.currentAppLanguage = lang;
        localStorage.setItem("app_language", lang);
    },

    // Manual override for game language
    setGameLanguage(lang) {
        if (!this.supported.includes(lang)) return;
        this.currentGameLanguage = lang;
        localStorage.setItem("game_language", lang);
    },

    // Apply language to game launch
    applyToGame(game) {
        return {
            game: game.name,
            language: this.currentGameLanguage
        };
    }
};