import React from 'react';
import CustomOptionCard, {CustomOptionStateProps} from './CustomOptionCard.tsx';

const CurtainFittingCard: React.FC<CustomOptionStateProps> = (props) => {
    return (
        <CustomOptionCard
            {...props}
        />
    );
};

export default CurtainFittingCard;