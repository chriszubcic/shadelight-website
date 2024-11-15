import React from 'react';
import CustomOptionCard, {CustomOptionStateProps} from './CustomOptionCard.tsx';

const CurtainTrackColourCard: React.FC<CustomOptionStateProps> = (props) => {
    return (
        <CustomOptionCard
            {...props}
        />
    );
};

export default CurtainTrackColourCard;
