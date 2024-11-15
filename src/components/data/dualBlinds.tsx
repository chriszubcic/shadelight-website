import {CustomFurnishingTypeProps} from "../custom/CustomFurnishingType.tsx";
import DualBlockoutLightFiltering from "./blockout_lightFiltering.tsx";
import DualBlockoutSunscreen from "./blockout_sunscreen.tsx";
import DualLightFilteringSunscreen from "./lightFiltering_sunscreen.tsx";

class DualBlinds {
    private static blinds: { types: CustomFurnishingTypeProps[] } = {
        types: [DualBlockoutLightFiltering.dualBlockoutLightFiltering, DualBlockoutSunscreen.dualBlockoutSunscreen,
        DualLightFilteringSunscreen.dualLightFilteringSunscreen],
    };

    static get types(): CustomFurnishingTypeProps[] {
        return this.blinds.types;
    }
}

export {DualBlinds};
