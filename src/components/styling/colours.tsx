interface ColourDictionary {
    [key: string]: string;
}

class Colours {
    private static colours: ColourDictionary = {
        "sl_white": "#f5fafa",
        "sl_black": "#010506",
        "sl_secondary": "#2B6CB0",
        "sl_error": "#D32F2F",
        "sl_textSecondary": "#00000099",
        "sl_grey": "#E0E0E0",
        "white": "#ffffff",
    };

    static get sl_white(): string {
        return this.colours["sl_white"];
    }

    static get sl_black(): string {
        return this.colours["sl_black"];
    }

    static get sl_secondary(): string {
        return this.colours["sl_secondary"];
    }

    static get sl_error(): string {
        return this.colours["sl_error"];
    }

    static get sl_textSecondary(): string {
        return this.colours["sl_textSecondary"];
    }

    static get sl_grey(): string {
        return this.colours["sl_grey"];
    }

    static get white(): string {
        return this.colours["white"];
    }

    static getColour(key: string): string | undefined {
        return this.colours[key];
    }

    static getAllColours(): ColourDictionary {
        return this.colours;
    }
}

// Export the class if needed
export {Colours};
