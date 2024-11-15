import {Box} from "@mui/material";
import CustomContainerHeading from "../custom/CustomContainerHeading.tsx";
import {CustomOptionProps} from "../custom/CustomOptionCard.tsx";
import CurtainStyleCard from "../custom/CurtainStyleCard.tsx";

interface CurtainStyleContainerProps {
    selectedCurtainStyle: CustomOptionProps | null;
    onSelect: (curtainStyle: CustomOptionProps) => void;
}

function CurtainStyleContainer({selectedCurtainStyle, onSelect}: CurtainStyleContainerProps) {
    const heading_no = '6';
    const heading = 'Furnishing Style';

    const curtainStyles: CustomOptionProps[] = [
        {image: 'front_roll.png', title: 'Pulling', id: 'pulling', price: null},
        {image: 'back_roll.png', title: 'Off floor', id: 'offfloor', price: null},
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
                {curtainStyles.map((curtainStyle: CustomOptionProps) => (
                    <CurtainStyleCard
                        key={curtainStyle.id}
                        {...curtainStyle}
                        isSelected={selectedCurtainStyle?.id === curtainStyle.id}
                        onSelect={onSelect}
                    />
                ))}
            </Box>
        </Box>
    );
}

export default CurtainStyleContainer;
