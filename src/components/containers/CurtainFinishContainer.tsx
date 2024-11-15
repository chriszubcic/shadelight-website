import {Box} from "@mui/material";
import CustomContainerHeading from "../custom/CustomContainerHeading.tsx";
import {CustomOptionProps} from "../custom/CustomOptionCard.tsx";
import CurtainFinishCard from "../custom/CurtainFinishCard.tsx";

import optionImg from "../images/white_winder.png";

interface CurtainFinishContainerProps {
    selectedFinish: CustomOptionProps | null;
    onSelect: (curtainFinish: CustomOptionProps) => void;
}

function CurtainFinishContainer({selectedFinish, onSelect}: CurtainFinishContainerProps) {
    const heading_no = '4';
    const heading = 'Curtain Finish';

    const curtainFinishes: CustomOptionProps[] = [
        {image: optionImg, title: 'Gathered', id: 'gath', price: null},
        {image: optionImg, title: 'S-Fold', id: 'sfold', price: null},
        {image: optionImg, title: 'Wave', id: 'wave', price: null},
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
                {curtainFinishes.map((curtainFinish: CustomOptionProps) => (
                    <CurtainFinishCard
                        key={curtainFinish.id}
                        {...curtainFinish}
                        isSelected={selectedFinish?.id === curtainFinish.id}
                        onSelect={onSelect}
                    />
                ))}
            </Box>
        </Box>
    );
}

export default CurtainFinishContainer;
