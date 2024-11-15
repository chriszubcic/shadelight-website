import {CustomDualFurnishingTypeStateProps} from "../custom/CustomFurnishingType.tsx";
import sunscreen from "./sunscreen.tsx";
import lightFiltering from "./lightFiltering.tsx";


// Define a class that uses the interface
class DualLightFilteringSunscreen {
    private static _dualLightFilteringSunscreen: CustomDualFurnishingTypeStateProps = {
        title: "Light Filtering & Sunscreen",
        id: "lightFiltering_sunscreen",
        image: "src/components/images/blockout_blind.png",
        description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
        fabrics: lightFiltering.fabrics,
        fabrics_secondary: sunscreen.fabrics,
        minPrice: 100
    };

    static get dualLightFilteringSunscreen(): CustomDualFurnishingTypeStateProps {
        return this._dualLightFilteringSunscreen;
    }

    static get title(): string {
        return this._dualLightFilteringSunscreen.title;
    }

    static get id(): string {
        return this._dualLightFilteringSunscreen.id;
    }

    static get image(): string {
        return this._dualLightFilteringSunscreen.image;
    }

    static get description(): string {
        return this._dualLightFilteringSunscreen.description;
    }

    static get fabrics() {
        return this._dualLightFilteringSunscreen.fabrics;
    }

    static get fabrics_secondary() {
        return this._dualLightFilteringSunscreen.fabrics_secondary;
    }

    static get minPrice(): number {
        return this._dualLightFilteringSunscreen.minPrice;
    }
}

export default DualLightFilteringSunscreen;
