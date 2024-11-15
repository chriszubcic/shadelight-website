import InfoScreenTemplate from "./InfoScreenTemplate.tsx";

function MotorisationScreen() {
    const title: string = "Motorisation"
    const description: string = "Our motorised systems introduce a new level of convenience and sophistication to your living environment, blending advanced technology with seamless functionality. Whether operated via a remote control or integrated into a home automation system, our motorised blinds offer effortless adjustment with just a touch. This innovation not only enhances the ease of managing light and privacy throughout your home but also adds a sleek, modern touch to your interior. Imagine the luxury of scheduling your blinds to open at dawn and close at dusk, or adjusting them from across the room, all with the touch of a finger. The blend of technology and elegance ensures that your blinds are not just functional, but a statement of modern living."
    return (
        <InfoScreenTemplate title={title} description={description} />
    );
}

export default MotorisationScreen;