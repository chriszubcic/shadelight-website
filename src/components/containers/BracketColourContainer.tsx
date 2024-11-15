import {Box} from "@mui/material";
import CustomContainerHeading from "../custom/CustomContainerHeading.tsx";
import BracketColourCard from "../custom/BracketColourCard.tsx";
import {CustomOptionProps} from "../custom/CustomOptionCard.tsx";

interface BracketColourContainerProps {
    selectedBracketColour: CustomOptionProps | null;
    onSelect: (bracketColour: CustomOptionProps) => void;
}

function BracketColourContainer({selectedBracketColour, onSelect}: BracketColourContainerProps) {
    const heading_no = '7';
    const heading = 'Bracket Colour';

    const bracketColours: CustomOptionProps[] = [
        {image:'black_brackets.png', title:'Black', id:'bw', price:null},
        {image:'white_bracket.png', title:'White', id:'ww', price:null}
    ];

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
                {bracketColours.map((bracketColour: CustomOptionProps) => (
                    <BracketColourCard
                        key={bracketColour.id}
                        {...bracketColour}
                        isSelected = {selectedBracketColour?.id === bracketColour.id}
                        onSelect = {onSelect}
                    />
                ))}
            </Box>
        </Box>
    );
}

export default BracketColourContainer;
