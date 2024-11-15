import {Box} from "@mui/material";
import CustomContainerHeading from "../custom/CustomContainerHeading.tsx";
import {CustomOptionProps} from "../custom/CustomOptionCard.tsx";
import DriveControlCard from "../custom/DriveControlCard.tsx";

interface DriveControlContainerProps {
    selectedDriveControl: CustomOptionProps | null;
    onSelect: (driveControl: CustomOptionProps) => void;
}

function DriveControlContainer({selectedDriveControl, onSelect}: DriveControlContainerProps) {
    const heading_no = '5';
    const heading = 'Drive Control';

    const driveControls: CustomOptionProps[] = [
        {image: 'chain_drive.png', title: 'Chain', id: 'cc', price: null},
        {image: 'motor_control.png', title: 'Motor', id: 'mc', price: 500}
    ]

    return (
        <Box>
            <CustomContainerHeading heading_no={heading_no} title={heading}/>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 1,
                    justifyContent: 'flex-start',
                }}
            >
                {driveControls.map((driveControl: CustomOptionProps) => (
                    <DriveControlCard
                        key={driveControl.id}
                        {...driveControl}
                        isSelected={selectedDriveControl?.id === driveControl.id}
                        onSelect={onSelect}
                    />
                ))}
            </Box>
        </Box>
    );
}

export default DriveControlContainer;
