import InfoScreenTemplate from "./InfoScreenTemplate.tsx";

function ExternalsScreen() {
    const title: string = "Externals"
    const description: string = "Our external blinds seamlessly blend functionality with sophistication, offering a refined solution for enhancing outdoor living spaces. Designed to withstand the elements while providing a stylish finish, our options offer unparalleled protection from harsh sunlight, wind, and rain. They allow you to control light levels and privacy with ease, creating a comfortable and inviting atmosphere in your outdoor areas. Whether you're seeking to reduce glare on a sun-drenched patio or shield your space from the elements while enjoying an alfresco meal, our external blinds provide a versatile and elegant enhancement. Their durable construction and chic design not only add to the visual appeal of your exterior but also contribute to energy efficiency by reducing heat buildup and glare."
    return (
        <InfoScreenTemplate title={title} description={description} />
    );
}

export default ExternalsScreen;