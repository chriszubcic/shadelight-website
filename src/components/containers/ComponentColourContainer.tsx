import {Box} from "@mui/material";
import CustomContainerHeading from "../custom/CustomContainerHeading.tsx";
import ComponentColourCard from "../custom/ComponentColourCard.tsx";
import {CustomOptionProps} from "../custom/CustomOptionCard.tsx";

import optionImg from "../images/white_winder.png";

interface ComponentColourContainerProps {
    selectedComponentColour: CustomOptionProps | null;
    onSelect: (componentColour: CustomOptionProps) => void;
}

function ComponentColourContainer({selectedComponentColour, onSelect}: ComponentColourContainerProps) {
    const heading_no = '6';
    const heading = 'Components Colour';

    const componentColours: CustomOptionProps[] = [
        {image: optionImg, title: 'Black', id: 'bw', price: null},
        {image: optionImg, title: 'White', id: 'ww', price: null}
    ]

    return (
        <Box>
            <CustomContainerHeading heading_no={heading_no} title={heading}/>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 1,
                    justifyContent: 'flex-start'
                }}
            >
                {componentColours.map((componentColour: CustomOptionProps) => (
                    <ComponentColourCard
                        key={componentColour.id}
                        {...componentColour}
                        isSelected={selectedComponentColour?.id === componentColour.id}
                        onSelect={onSelect}/>
                ))}
            </Box>
        </Box>
    );
}

export default ComponentColourContainer;
