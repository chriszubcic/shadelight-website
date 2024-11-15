import {CustomDualFurnishingTypeStateProps} from "../custom/CustomFurnishingType.tsx";
import blockout from "./blockout.tsx";
import sunscreen from "./sunscreen.tsx";


// Define a class that uses the interface
class DualBlockoutSunscreen {
    private static _dualBlockoutSunscreen: CustomDualFurnishingTypeStateProps = {
        title: "Blockout & Sunscreen",
        id: "blockout_sunscreen",
        image: "src/components/images/blockout_blind.png",
        description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
        fabrics: blockout.fabrics,
        fabrics_secondary: sunscreen.fabrics,
        minPrice: 100
    };

    static get dualBlockoutSunscreen(): CustomDualFurnishingTypeStateProps {
        return this._dualBlockoutSunscreen;
    }

    static get title(): string {
        return this._dualBlockoutSunscreen.title;
    }

    static get id(): string {
        return this._dualBlockoutSunscreen.id;
    }

    static get image(): string {
        return this._dualBlockoutSunscreen.image;
    }

    static get description(): string {
        return this._dualBlockoutSunscreen.description;
    }

    static get fabrics() {
        return this._dualBlockoutSunscreen.fabrics;
    }

    static get fabrics_secondary() {
        return this._dualBlockoutSunscreen.fabrics_secondary;
    }

    static get minPrice(): number {
        return this._dualBlockoutSunscreen.minPrice;
    }
}

export default DualBlockoutSunscreen;
