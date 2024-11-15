import {Box} from "@mui/material";
import CustomContainerHeading from "../custom/CustomContainerHeading.tsx";
import RollDirectionCard from "../custom/RollDirectionCard.tsx";
import {CustomOptionProps} from "../custom/CustomOptionCard.tsx";

import optionImg from "../images/white_winder.png";

interface RollDirectionContainerProps {
    selectedRollDirection: CustomOptionProps | null;
    onSelect: (rollDirection: CustomOptionProps) => void;
}

function RollDirectionContainer({selectedRollDirection, onSelect}: RollDirectionContainerProps) {
    const heading_no = '4';
    const heading = 'Roll Direction';

    const rollDirections: CustomOptionProps[] = [
        {image: optionImg, title: 'Front Roll', id: 'fr', price: null},
        {image: optionImg, title: 'Back Roll', id: 'br', price: null},
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
                {rollDirections.map((rollDirection: CustomOptionProps) => (
                    <RollDirectionCard
                        key={rollDirection.id}
                        {...rollDirection}
                        isSelected={selectedRollDirection?.id === rollDirection.id}
                        onSelect={onSelect}
                    />
                ))}
            </Box>
        </Box>
    );
}

export default RollDirectionContainer;
