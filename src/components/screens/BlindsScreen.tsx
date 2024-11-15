import InfoScreenTemplate from "./InfoScreenTemplate.tsx";
import {Blinds} from "../data/blinds.tsx";
import {DualBlinds} from "../data/dualBlinds.tsx";

function BlindsScreen() {
    const title: string = "Roller Blinds"
    const description: string = "Roller blinds offer a refined blend of style and functionality, seamlessly integrating into any interior design. Their sleek, minimalist appearance ensures they complement both contemporary and classic decor with ease. Crafted from high-quality materials, roller blinds provide excellent light control and privacy, allowing you to effortlessly adjust the ambiance of your space. Whether you seek to block out the sun for a restful night’s sleep or let in just the right amount of light during the day, roller blinds offer versatile solutions with a simple, elegant mechanism. Their easy-to-clean surfaces and compact design also make them an ideal choice for maintaining a pristine, uncluttered look in any room.\n"
    const blindTypes = [...Blinds.types, ...DualBlinds.types];

    return (
        <InfoScreenTemplate title={title} description={description} furnishingTypes={blindTypes}/>
    );
}

export default BlindsScreen;