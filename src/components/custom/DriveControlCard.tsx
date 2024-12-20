import React from "react";
import CustomOptionCard, { CustomOptionStateProps } from "./CustomOptionCard.tsx";


const DriveControlCard: React.FC<CustomOptionStateProps> = (props) => {
    return <CustomOptionCard {...props} />;
};

export default DriveControlCard;
