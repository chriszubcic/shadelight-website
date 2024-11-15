import CustomOptionCard, {CustomOptionStateProps} from './CustomOptionCard.tsx';
import React from "react";

const BracketColourCard: React.FC<CustomOptionStateProps> = (props) => {
    return (
        <CustomOptionCard
            {...props}
        />
    );
};

export default BracketColourCard;
