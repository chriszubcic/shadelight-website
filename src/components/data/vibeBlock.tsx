import {CustomFabricProps} from "../custom/CustomFabricCard.tsx";

import fabricImg from '../images/matrix_pattern.png'

class VibeBlock {
    private static vibe_block: CustomFabricProps = {
        id: "vibe_block",
        title: "Vibe",
        image: fabricImg,
        description: "",
        colours: [
            {id: 0, color: '#D2CFC4', name: 'Oyster', value: 1},
            {id: 1, color: '#B5B3A7', name: 'Cobblestone', value: 1},
            {id: 2, color: '#C0B9A6', name: 'Almond', value: 1},
            {id: 3, color: '#E0DED6', name: 'Dove', value: 1},
            {id: 4, color: '#A79F8E', name: 'Haze', value: 1},
            {id: 5, color: '#C7C2B1', name: 'Sesame', value: 1},
        ],
        minPrice: 100,
        widthLimits: [610, 3010],
        heightLimits: [600, 3300],
        price: 0,
        priceGroup: 1,
    };

    // Accessor methods to expose individual properties
    static get title(): string {
        return this.vibe_block.title;
    }

    static get image(): string {
        return this.vibe_block.image;
    }

    static get description(): string {
        return this.vibe_block.description;
    }

    static get colours() {
        return this.vibe_block.colours;
    }

    static get minPrice(): number {
        return this.vibe_block.minPrice;
    }

    static get widthLimits(): number[] {
        return this.vibe_block.widthLimits;
    }

    static get heightLimits(): number[] {
        return this.vibe_block.heightLimits;
    }

    static get id(): string {
        return this.vibe_block.id;
    }

    // Method to get the CustomFabricProps object directly
    static getFabricProps(): CustomFabricProps {
        return this.vibe_block;
    }

    static get price(): number {
        return this.vibe_block.price
    }

    static get priceGroup(): number {
        return this.vibe_block.priceGroup
    }
}

export default VibeBlock;
