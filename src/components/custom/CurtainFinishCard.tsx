import React from 'react';
import CustomOptionCard, {CustomOptionStateProps} from './CustomOptionCard.tsx';

const CurtainFinishCard: React.FC<CustomOptionStateProps> = (props) => {
    return (
        <CustomOptionCard
            {...props}
        />
    );
};

export default CurtainFinishCard;
