import VividLightFiltering from "./vividLightFiltering.tsx";
import {CustomFurnishingTypeProps} from "../custom/CustomFurnishingType.tsx";

import blindImg from "../images/light_filtering.png"

// Define a class that uses the interface
class LightFiltering {
    private static _lightfiltering: CustomFurnishingTypeProps = {
        title: "Light Filtering",
        id: "lightfiltering",
        image: blindImg,
        description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
        fabrics: [VividLightFiltering],
        minPrice: 100
    };

    static get lightfiltering(): CustomFurnishingTypeProps {
        return this._lightfiltering;
    }

    static get title(): string {
        return this._lightfiltering.title;
    }

    static get id(): string {
        return this._lightfiltering.id;
    }

    static get image(): string {
        return this._lightfiltering.image;
    }

    static get description(): string {
        return this._lightfiltering.description;
    }

    static get fabrics() {
        return this._lightfiltering.fabrics;
    }

    static get minPrice(): number {
        return this._lightfiltering.minPrice;
    }
}

// Export the class if needed
export default LightFiltering;
