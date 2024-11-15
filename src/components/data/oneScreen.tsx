import {CustomFabricProps} from "../custom/CustomFabricCard.tsx";

class OneScreen {
    private static one_screen: CustomFabricProps = {
        id: "one_screen",
        title: "One",
        image: 'src/components/images/matrix_pattern.png',
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
        ],
        minPrice: 100,
        widthLimits: [610, 3010],
        heightLimits: [600, 3300],
        price: 0,
        priceGroup: 2,
    };

    // Accessor methods to expose individual properties
    static get title(): string {
        return this.one_screen.title;
    }

    static get image(): string {
        return this.one_screen.image;
    }

    static get description(): string {
        return this.one_screen.description;
    }

    static get colours() {
        return this.one_screen.colours;
    }

    static get minPrice(): number {
        return this.one_screen.minPrice;
    }

    static get widthLimits(): number[] {
        return this.one_screen.widthLimits;
    }

    static get heightLimits(): number[] {
        return this.one_screen.heightLimits;
    }

    static get id(): string {
        return this.one_screen.id;
    }

    // Method to get the CustomFabricProps object directly
    static getFabricProps(): CustomFabricProps {
        return this.one_screen;
    }

    static get price(): number {
        return this.one_screen.price
    }

    static get priceGroup(): number {
        return this.one_screen.priceGroup
    }
}

export default OneScreen;
