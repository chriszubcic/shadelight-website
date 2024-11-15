import {CustomFabricProps} from "../custom/CustomFabricCard.tsx";

import fabricImg from '../images/matrix_pattern.png'

class VividLightFiltering {
    private static vivid_lightfiltering: CustomFabricProps = {
        id: "vivid_lightfiltering",
        title: "Vivid",
        image: fabricImg,
        description: "",
        colours: [
            {id: 0, color: '#EAE7DC', name: 'Linen', value: 1},
            {id: 1, color: '#D8C3A5', name: 'Sand', value: 1},
            {id: 2, color: '#A59F8E', name: 'Pebble', value: 1},
            {id: 3, color: '#7A7A7A', name: 'Smoke', value: 1},
            {id: 4, color: '#B0B2B8', name: 'Ash', value: 1},
            {id: 5, color: '#C1BCB1', name: 'Mushroom', value: 1},
            {id: 6, color: '#8C8C88', name: 'Graphite', value: 1},
            {id: 7, color: '#E6E2D3', name: 'Fog', value: 1},
            {id: 8, color: '#B3ADA7', name: 'Clay', value: 1},
            {id: 9, color: '#D3D3D3', name: 'Stone', value: 1},
            {id: 10, color: '#E5E4E2', name: 'Pearl', value: 1},
            {id: 11, color: '#D5D2C2', name: 'Oatmeal', value: 1},
            {id: 12, color: '#B2A596', name: 'Driftwood', value: 1},
            {id: 13, color: '#ACA89B', name: 'Pumice', value: 1},
            {id: 14, color: '#D9D3C5', name: 'Frost', value: 1},
            {id: 15, color: '#CDCAB6', name: 'Putty', value: 1},
            {id: 16, color: '#9E9E93', name: 'Slate', value: 1},
            {id: 17, color: '#EDE8DC', name: 'Almond', value: 1},
            {id: 18, color: '#C7C1BA', name: 'Taupe', value: 1},
            {id: 19, color: '#A29B85', name: 'Flint', value: 1},
        ],
        minPrice: 100,
        widthLimits: [610, 3010],
        heightLimits: [600, 3300],
        price: 0,
        priceGroup: 3,
    };

    // Accessor methods to expose individual properties
    static get title(): string {
        return this.vivid_lightfiltering.title;
    }

    static get image(): string {
        return this.vivid_lightfiltering.image;
    }

    static get description(): string {
        return this.vivid_lightfiltering.description;
    }

    static get colours() {
        return this.vivid_lightfiltering.colours;
    }

    static get minPrice(): number {
        return this.vivid_lightfiltering.minPrice;
    }

    static get widthLimits(): number[] {
        return this.vivid_lightfiltering.widthLimits;
    }

    static get heightLimits(): number[] {
        return this.vivid_lightfiltering.heightLimits;
    }

    static get id(): string {
        return this.vivid_lightfiltering.id;
    }

    // Method to get the CustomFabricProps object directly
    static getFabricProps(): CustomFabricProps {
        return this.vivid_lightfiltering;
    }

    static get price(): number {
        return this.vivid_lightfiltering.price
    }

    static get priceGroup(): number {
        return this.vivid_lightfiltering.priceGroup
    }
}

export default VividLightFiltering;
