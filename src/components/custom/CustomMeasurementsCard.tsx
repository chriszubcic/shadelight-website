import React, {useMemo, useEffect} from 'react';
import {Box, Button, Typography, IconButton, Card} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {Colours} from "../styling/colours.tsx";
import CustomMeasurementInput from './CustomMeasurementInput'; // Import the new component
import {CustomFabricProps} from "./CustomFabricCard.tsx";

interface CustomMeasurementsCardProps {
    onRemove: () => void;
    title: string;
    index: number;
    width: string;
    drop: string;
    selectedSide: 'Left' | 'Right' | '';
    onWidthChange: (value: string) => void;
    onDropChange: (value: string) => void;
    onSideChange: (side: 'Left' | 'Right') => void;
    onValidMeasurementChange: (isValid: boolean) => void;
    fabricType: CustomFabricProps | null;
}

function CustomMeasurementsCard({
                                    onRemove,
                                    title,
                                    index,
                                    width,
                                    drop,
                                    selectedSide,
                                    onWidthChange,
                                    onSideChange,
                                    onDropChange,
                                    onValidMeasurementChange,
                                    fabricType,
                                }: CustomMeasurementsCardProps) {

    const widthLimits = (fabricType ? fabricType.widthLimits : [0, 0]);
    const dropLimits = (fabricType ? fabricType.heightLimits : [0, 0]);

    const isValidMeasurement = useMemo(() => {
        const widthValid = width !== '' && Number(width) >= widthLimits[0] && Number(width) <= widthLimits[1];
        const dropValid = drop !== '' && Number(drop) >= dropLimits[0] && Number(drop) <= dropLimits[1];
        return widthValid && dropValid;
    }, [width, drop, widthLimits, dropLimits]);

    useEffect(() => {
        onValidMeasurementChange(isValidMeasurement);
    }, [isValidMeasurement, onValidMeasurementChange]);

    return (
        <Card sx={{padding: 2}}>
            <Box height="auto" width="100%" display="flex" alignItems="flex-start" gap={1}
                 sx={{backgroundColor: Colours.white, flexDirection: {xs: 'column', sm: 'row'}}}>
                <Box sx={{display: 'flex', flexDirection: 'column', flex: 1}}>
                    <Typography variant="h6" component="div">{title}</Typography>
                    <Box sx={{display: 'flex'}}>
                        {/* Use CustomMeasurementInput for width */}
                        <CustomMeasurementInput
                            label="Width"
                            value={width}
                            onChange={onWidthChange}
                            min={widthLimits[0]}
                            max={widthLimits[1]}
                        />
                        {/* Use CustomMeasurementInput for drop */}
                        <CustomMeasurementInput
                            label="Drop"
                            value={drop}
                            onChange={onDropChange}
                            min={dropLimits[0]}
                            max={dropLimits[1]}
                        />
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                    width: {xs: '100%', sm: 'auto'}
                }}>
                    <Typography variant="overline" sx={{marginTop: {xs: 0, sm: 4}, marginBottom: -2}} component="div">
                        Control Side
                    </Typography>
                    <Box sx={{display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center', flexGrow: 1}}>
                        {['Left', 'Right'].map((side) => (
                            <Button
                                key={side}
                                variant={selectedSide === side ? 'contained' : 'outlined'}
                                disableRipple
                                disableElevation
                                onClick={() => onSideChange(side as 'Left' | 'Right')}
                                sx={{
                                    width: {xs: '100%', sm: '10vw'},
                                    backgroundColor: selectedSide === side ? Colours.sl_black : 'transparent',
                                    color: selectedSide === side ? Colours.white : Colours.sl_black,
                                    borderColor: Colours.sl_black,
                                    height: '44px',
                                    '&:hover': selectedSide !== side ? {
                                        color: Colours.sl_secondary,
                                        borderColor: Colours.sl_secondary
                                    } : null,
                                }}
                            >
                                {side}
                            </Button>
                        ))}
                        {index !== 1 ? (
                            <IconButton
                                aria-label="delete"
                                disableRipple
                                onClick={onRemove}
                                sx={{
                                    height: '56px',
                                    width: '56px',
                                    marginLeft: 'auto', // Move the icon button to the right
                                    '&:hover': {
                                        color: Colours.sl_secondary,
                                    },
                                }}
                            >
                                <DeleteIcon/>
                            </IconButton>
                        ) : <Box sx={{height: '56px', width: '56px'}}/>}
                    </Box>
                </Box>
            </Box>
        </Card>
    );
}

export default React.memo(CustomMeasurementsCard);
