import InfoScreenTemplate from "./InfoScreenTemplate.tsx";

function ShuttersScreen() {
    const title: string = "Shutters"
    const description: string = "Shutters epitomize refined sophistication and classic charm, enhancing the aesthetic appeal and functionality of any space. Their solid, enduring design offers a timeless elegance that complements a range of interior styles, from traditional to contemporary. Shutters provide exceptional versatility in light and privacy control, allowing you to adjust the slats to achieve the perfect balance of illumination and seclusion. Their robust construction not only ensures durability but also adds an element of architectural interest to your windows. Easy to maintain and highly effective at insulating against heat and cold, shutters combine beauty with practicality, making them a distinguished choice for elevating your home’s decor."
    return (
        <InfoScreenTemplate title={title} description={description} />
    );
}

export default ShuttersScreen;