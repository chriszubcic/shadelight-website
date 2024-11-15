import Blockout from "./blockout.tsx";
import {CustomFurnishingTypeProps} from "../custom/CustomFurnishingType.tsx";
import LightFiltering from "./lightFiltering.tsx";
import Sunscreen from "./sunscreen.tsx";

class Blinds {
    private static blinds: { types: CustomFurnishingTypeProps[] } = {
        types: [Blockout.blockout, LightFiltering.lightfiltering, Sunscreen.sunscreen],
    };

    static get types(): CustomFurnishingTypeProps[] {
        return this.blinds.types;
    }
}

export {Blinds};
