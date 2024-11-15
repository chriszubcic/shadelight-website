import {Box} from "@mui/material";
import CustomContainerHeading from "../custom/CustomContainerHeading.tsx";
import {CustomOptionProps} from "../custom/CustomOptionCard.tsx";
import CurtainTrackColourCard from "../custom/CurtainTrackColourCard.tsx";

interface CurtainTrackColourContainerProps {
    selectedTrackColour: CustomOptionProps | null;
    onSelect: (curtainTrackColour: CustomOptionProps) => void;
}

function CurtainTrackColourContainer({selectedTrackColour, onSelect}: CurtainTrackColourContainerProps) {
    const heading_no = '8';
    const heading = 'Track Colour';

    const curtainTrackColours: CustomOptionProps[] = [
        {image: 'front_roll.png', title: 'Black', id: 'blacktrack', price: null},
        {image: 'back_roll.png', title: 'White', id: 'whitetrack', price: null},
    ];

    return (
        <Box>
            <CustomContainerHeading heading_no={heading_no} title={heading}/>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 1,
                    justifyContent: 'flex-start',
                }}
            >
                {curtainTrackColours.map((curtainTrackColour: CustomOptionProps) => (
                    <CurtainTrackColourCard
                        key={curtainTrackColour.id}
                        {...curtainTrackColour}
                        isSelected={selectedTrackColour?.id === curtainTrackColour.id}
                        onSelect={onSelect}
                    />
                ))}
            </Box>
        </Box>
    );
}

export default CurtainTrackColourContainer;
