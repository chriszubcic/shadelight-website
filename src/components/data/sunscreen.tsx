import OneScreen from "./oneScreen.tsx";
import {CustomFurnishingTypeProps} from "../custom/CustomFurnishingType.tsx";


// Define a class that uses the interface
class Sunscreen {
    private static _sunscreen: CustomFurnishingTypeProps = {
        title: "Sunscreen",
        id: "sunscreen",
        image: "src/components/images/sunscreen_blind.png",
        description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
        fabrics: [OneScreen],
        minPrice: 100
    };

    static get sunscreen(): CustomFurnishingTypeProps {
        return this._sunscreen;
    }

    static get title(): string {
        return this._sunscreen.title;
    }

    static get id(): string {
        return this._sunscreen.id;
    }

    static get image(): string {
        return this._sunscreen.image;
    }

    static get description(): string {
        return this._sunscreen.description;
    }

    static get fabrics() {
        return this._sunscreen.fabrics;
    }

    static get minPrice(): number {
        return this._sunscreen.minPrice;
    }
}

// Export the class if needed
export default Sunscreen;
