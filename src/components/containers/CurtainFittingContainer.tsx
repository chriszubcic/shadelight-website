import {Box} from "@mui/material";
import CustomContainerHeading from "../custom/CustomContainerHeading.tsx";
import {CustomOptionProps} from "../custom/CustomOptionCard.tsx";
import CurtainFittingCard from "../custom/CurtainFittingCard.tsx";

import optionImg from "../images/white_winder.png";

interface CurtainFittingContainerProps {
    selectedFitting: CustomOptionProps | null;
    onSelect: (curtainFitting: CustomOptionProps) => void;
}

function CurtainFittingContainer({selectedFitting, onSelect}: CurtainFittingContainerProps) {
    const heading_no = '5';
    const heading = 'Fitting';

    const curtainFittings: CustomOptionProps[] = [
        {image: optionImg, title: 'Face Fix', id: 'facefix', price: null},
        {image: optionImg, title: 'Top Fix', id: 'topfix', price: null},
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
                {curtainFittings.map((curtainFitting: CustomOptionProps) => (
                    <CurtainFittingCard
                        key={curtainFitting.id}
                        {...curtainFitting}
                        isSelected={selectedFitting?.id === curtainFitting.id}
                        onSelect={onSelect}
                    />
                ))}
            </Box>
        </Box>
    );
}

export default CurtainFittingContainer;
