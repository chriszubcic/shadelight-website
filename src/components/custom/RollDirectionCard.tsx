import React from 'react';
import CustomOptionCard, {CustomOptionStateProps} from './CustomOptionCard.tsx';

const RollDirectionCard: React.FC<CustomOptionStateProps> = (props) => {
    return (
        <CustomOptionCard
            {...props}
        />
    );
};

export default RollDirectionCard;
