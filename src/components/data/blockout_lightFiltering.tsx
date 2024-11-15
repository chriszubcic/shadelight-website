import {CustomDualFurnishingTypeStateProps} from "../custom/CustomFurnishingType.tsx";
import lightFiltering from "./lightFiltering.tsx";
import blockout from "./blockout.tsx";

import blindImg from "../images/blockout_blind.png"

// Define a class that uses the interface
class DualBlockoutLightFiltering {
    private static _dualBlockoutLightFiltering: CustomDualFurnishingTypeStateProps = {
        title: "Blockout & Light Filtering",
        id: "blockout_lightfiltering",
        image: blindImg,
        description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
        fabrics: blockout.fabrics,
        fabrics_secondary: lightFiltering.fabrics,
        minPrice: 100
    };

    static get dualBlockoutLightFiltering(): CustomDualFurnishingTypeStateProps {
        return this._dualBlockoutLightFiltering;
    }

    static get title(): string {
        return this._dualBlockoutLightFiltering.title;
    }

    static get id(): string {
        return this._dualBlockoutLightFiltering.id;
    }

    static get image(): string {
        return this._dualBlockoutLightFiltering.image;
    }

    static get description(): string {
        return this._dualBlockoutLightFiltering.description;
    }

    static get fabrics() {
        return this._dualBlockoutLightFiltering.fabrics;
    }

    static get fabrics_secondary() {
        return this._dualBlockoutLightFiltering.fabrics_secondary;
    }

    static get minPrice(): number {
        return this._dualBlockoutLightFiltering.minPrice;
    }
}

export default DualBlockoutLightFiltering;
