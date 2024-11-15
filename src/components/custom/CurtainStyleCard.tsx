import React from 'react';
import CustomOptionCard, {CustomOptionStateProps} from './CustomOptionCard.tsx';

const CurtainStyleCard: React.FC<CustomOptionStateProps> = (props) => {
    return (
        <CustomOptionCard
            {...props}
        />
    );
};

export default CurtainStyleCard;