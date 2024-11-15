import VibeBlock from "./vibeBlock.tsx";
import VividBlock from "./vividBlock.tsx";
import OneBlock from "./oneBlock.tsx";
import {CustomFurnishingTypeProps} from "../custom/CustomFurnishingType.tsx";

import blindImg from "../images/blockout_blind.png"

// Define a class that uses the interface
class Blockout {
    private static _blockout: CustomFurnishingTypeProps = {
        title: "Blockout",
        id: "blockout",
        image: blindImg,
        description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
        fabrics: [VibeBlock, VividBlock, OneBlock],
        minPrice: 100
    };

    static get blockout(): CustomFurnishingTypeProps {
        return this._blockout;
    }

    static get title(): string {
        return this._blockout.title;
    }

    static get id(): string {
        return this._blockout.id;
    }

    static get image(): string {
        return this._blockout.image;
    }

    static get description(): string {
        return this._blockout.description;
    }

    static get fabrics() {
        return this._blockout.fabrics;
    }

    static get minPrice(): number {
        return this._blockout.minPrice;
    }
}

export default Blockout;
