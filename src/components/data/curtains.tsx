import Blockout from "./blockout.tsx";
import {CustomFurnishingTypeProps} from "../custom/CustomFurnishingType.tsx";
import LightFiltering from "./lightFiltering.tsx";
import Sunscreen from "./sunscreen.tsx";

class Curtains {
    private static curtains: { types: CustomFurnishingTypeProps[] } = {
        types: [Blockout.blockout, LightFiltering.lightfiltering, Sunscreen.sunscreen],
    };

    static get types(): CustomFurnishingTypeProps[] {
        return this.curtains.types;
    }
}

// Export the class if needed
export {Curtains};
