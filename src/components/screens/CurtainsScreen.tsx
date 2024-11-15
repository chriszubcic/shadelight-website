import InfoScreenTemplate from "./InfoScreenTemplate.tsx";
import {Curtains} from "../data/curtains.tsx";

function CurtainsScreen() {
    const title: string = "Curtains"
    const description: string = "Curtains embody timeless elegance and grace, transforming any space into a sanctuary of style and comfort. With their rich textures and versatile colour palletes, curtains offer a luxurious touch that enhances both modern and traditional interiors. They provide exceptional control over light and privacy, allowing you to create the perfect atmosphere for any occasion. Whether drawn open to invite natural light or closed to create a cozy retreat, curtains offer a sophisticated solution for managing your environment. Their ability to soften and frame windows adds a warm, inviting quality to your home, while their easy maintenance ensures they remain a beautiful and functional feature in your décor."
    return (
        <InfoScreenTemplate title={title} description={description} furnishingTypes={Curtains.types}/>
    );
}

export default CurtainsScreen;