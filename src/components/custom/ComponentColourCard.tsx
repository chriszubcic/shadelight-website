import CustomOptionCard, {CustomOptionStateProps} from './CustomOptionCard.tsx';
import React from "react";


const ComponentColourCard: React.FC<CustomOptionStateProps> = (props) => {
    return <CustomOptionCard {...props} />;
};

export default ComponentColourCard;
