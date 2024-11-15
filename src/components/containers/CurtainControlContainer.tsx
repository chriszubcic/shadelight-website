import {Box} from "@mui/material";
import CustomContainerHeading from "../custom/CustomContainerHeading.tsx";
import {CustomOptionProps} from "../custom/CustomOptionCard.tsx";
import CurtainControlCard from "../custom/CurtainControlCard.tsx";

import optionImg from "../images/white_winder.png";

interface CurtainControlContainerProps {
    selectedControl: CustomOptionProps | null;
    onSelect: (curtainControl: CustomOptionProps) => void;
}

function CurtainControlContainer({selectedControl, onSelect}: CurtainControlContainerProps) {
    const heading_no = '7';
    const heading = 'Control';

    const curtainControls: CustomOptionProps[] = [
        {image: optionImg, title: 'No Wand', id: 'nowand', price: null},
        {image: optionImg, title: 'Wand', id: 'wand', price: null},
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
                {curtainControls.map((curtainControl: CustomOptionProps) => (
                    <CurtainControlCard
                        key={curtainControl.id}
                        {...curtainControl}
                        isSelected={selectedControl?.id === curtainControl.id}
                        onSelect={onSelect}
                    />
                ))}
            </Box>
        </Box>
    );
}

export default CurtainControlContainer;
