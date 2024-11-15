import {CustomFabricProps} from "../custom/CustomFabricCard.tsx";

class OneBlock {
    private static one_block: CustomFabricProps = {
        title: "One",
        id: "one_block",
        image: 'src/components/images/fabric_pattern.png',
        description: "",
        colours: [
            {id: 0, color: '#F1F1E5', name: 'Ivory', value: 1},
            {id: 1, color: '#F9F9F7', name: 'Alabaster', value: 1},
            {id: 2, color: '#BFBCAB', name: 'Cinnamon', value: 1},
            {id: 3, color: '#354042', name: 'Charcoal', value: 1},
            {id: 4, color: '#A3B1B5', name: 'Slate', value: 1},
            {id: 5, color: '#D4DFE1', name: 'Silver', value: 1},
            {id: 6, color: '#64757C', name: 'Teal', value: 1},
            {id: 7, color: '#726F6A', name: 'Taupe', value: 1},
            {id: 8, color: '#3B4443', name: 'Gunmetal', value: 1},
            {id: 9, color: '#BBB99C', name: 'Beige', value: 1},
            {id: 10, color: '#FBFBFB', name: 'White', value: 1},
            {id: 11, color: '#EEE9D6', name: 'Cream', value: 1},
        ],
        minPrice: 100,
        widthLimits: [610, 3010],
        heightLimits: [600, 3300],
        price: 0,
        priceGroup: 2,
    };

    static get title(): string {
        return this.one_block.title;
    }

    static get image(): string {
        return this.one_block.image;
    }

    static get description(): string {
        return this.one_block.description;
    }

    static get colours() {
        return this.one_block.colours;
    }

    static get minPrice(): number {
        return this.one_block.minPrice;
    }

    static get widthLimits(): number[] {
        return this.one_block.widthLimits;
    }

    static get heightLimits(): number[] {
        return this.one_block.heightLimits;
    }

    static get id(): string {
        return this.one_block.id;
    }

    // Method to get the CustomFabricProps object directly
    static getFabricProps(): CustomFabricProps {
        return this.one_block;
    }

    static get priceGroup(): number {
        return this.one_block.priceGroup;
    }

    static get price(): number {
        return this.one_block.price;
    }
}

export default OneBlock;
