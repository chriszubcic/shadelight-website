import {Box} from "@mui/material";
import CustomContainerHeading from "../custom/CustomContainerHeading.tsx";
import CustomMeasurements, {MeasurementCard} from "../custom/CustomMeasurements.tsx";
import {CustomFabricProps} from "../custom/CustomFabricCard.tsx";

interface MeasurementsContainerProps {
    fabricType: CustomFabricProps | null
    onMeasurementsChange: (measurements: MeasurementCard[]) => void;
}

function MeasurementsContainer({fabricType, onMeasurementsChange}: MeasurementsContainerProps) {
    const heading_no = '3';
    const heading = 'Measurements';

    return (
        <Box>
            <CustomContainerHeading heading_no={heading_no} title={heading}/>
            <Box sx={{display: 'flex', gap: 1}}>
                <CustomMeasurements fabricType={fabricType} onMeasurementsChange={onMeasurementsChange}/>
            </Box>
        </Box>
    );
}

export default MeasurementsContainer;