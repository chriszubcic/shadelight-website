import React, {useState} from 'react';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography,
} from '@mui/material';
import {Colours} from '../styling/colours.tsx';
import {CustomFurnishingTypeProps} from './CustomFurnishingType.tsx';
import {CustomFabricProps} from './CustomFabricCard.tsx';
import {CustomOptionProps} from './CustomOptionCard.tsx';
import {ColourWheelProps} from './ColourWheel.tsx';
import {MeasurementCard} from './CustomMeasurements.tsx';
import MultipleFurnishingSummary from './MultipleFurnishingSummary.tsx';
import CustomOrderFormModal from "./CustomOrderFormModal.tsx";

export interface BaseOrderSummaryProps {
    furnishingType: CustomFurnishingTypeProps | null;
    fabric: CustomFabricProps | null;
    colour: ColourWheelProps | null;
    secondaryColour: ColourWheelProps | null | undefined;
    secondaryFabric: CustomFabricProps | null | undefined;
    measurements: MeasurementCard[];
    totalPrice: number;
}

export interface BlindOrderSummaryDrawerProps extends BaseOrderSummaryProps {
    type: 'blind';
    rollDirection: CustomOptionProps | null;
    driveControl: CustomOptionProps | null;
    componentColour: CustomOptionProps | null;
}

export interface CurtainOrderSummaryDrawerProps extends BaseOrderSummaryProps {
    type: 'curtain';
    selectedFinish: CustomOptionProps | null;
    selectedFitting: CustomOptionProps | null;
    selectedCurtainStyle: CustomOptionProps | null;
    selectedCurtainControl: CustomOptionProps | null;
    selectedTrackColour: CustomOptionProps | null;
}

export type OrderSummaryProps = BlindOrderSummaryDrawerProps | CurtainOrderSummaryDrawerProps;

export default function OrderSummaryContent(props: OrderSummaryProps) {
    const [expanded, setExpanded] = useState<string | false>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    function createData(key: string, value: string) {
        return {key, value};
    }

    const getDetailsRows = () => {
        if (props.type == 'blind') {
            return [
                createData('Roll Direction', props.rollDirection?.title || ''),
                createData('Drive Control', props.driveControl?.title || ''),
                createData('Components Colour', props.componentColour?.title || ''),
            ];
        } else {
            return [
                createData('Finish', props.selectedFinish?.title || ''),
                createData('Fitting', props.selectedFitting?.title || ''),
                createData('Style', props.selectedCurtainStyle?.title || ''),
                createData('Control', props.selectedCurtainControl?.title || ''),
                createData('Track Colour', props.selectedTrackColour?.title || ''),
            ];
        }
    };

    const isOrderComplete = () => {
        const baseRequirements =
            props.furnishingType &&
            props.fabric &&
            props.colour &&
            props.measurements.every(
                (measurement) => measurement.validMeasurement
            );

        if (props.type === 'blind') {
            if (props.secondaryFabric || props.secondaryColour) {
                return props.secondaryFabric &&
                    props.secondaryColour &&
                    baseRequirements &&
                    props.rollDirection &&
                    props.driveControl &&
                    props.componentColour
            } else {
                return baseRequirements &&
                    props.rollDirection &&
                    props.driveControl &&
                    props.componentColour
            }
        } else {
            return baseRequirements &&
                props.selectedFinish &&
                props.selectedFitting &&
                props.selectedCurtainStyle &&
                props.selectedCurtainControl &&
                props.selectedTrackColour;
        }
    };

    const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Box sx={{paddingLeft: 2, paddingRight: 2, paddingBottom: 2, flexGrow: 1, overflow: 'auto'}}>
                <Typography variant="h4" gutterBottom sx={{textAlign: 'center', mt: 5}}>
                    Order Summary
                </Typography>
                <Box sx={{overflow: 'auto'}}>
                    <Box
                        sx={{
                            overflow: 'auto',
                            borderTop: `1px solid ${Colours.sl_grey}`,
                            borderRadius: 0,
                            padding: '8px 16px',
                            marginBottom: '-8px',
                        }}
                    >
                        <Typography variant="h5">
                            {props.furnishingType?.title} {props.type === 'blind' ? 'Roller Blind' : 'Curtain'}
                        </Typography>
                        {props.secondaryFabric || props.secondaryColour ? (
                                <>
                                    <Typography variant="overline">
                                        <b>{props.furnishingType?.title.split('&')[0].trim()}:</b>&nbsp;
                                        {
                                            props.fabric?.title && props.colour?.name
                                                ? `${props.fabric.title}, ${props.colour.name}`
                                                : props.fabric?.title || props.colour?.name || '\u00A0'}
                                    </Typography>
                                    <Typography variant="overline">
                                        <br/>
                                        <b>{props.furnishingType?.title.split('&')[1].trim()}:</b>&nbsp;
                                        {props.secondaryFabric?.title && props.secondaryColour?.name
                                            ? `${props.secondaryFabric.title}, ${props.secondaryColour.name}`
                                            : props.secondaryFabric?.title || props.secondaryColour?.name || '\u00A0'}
                                    </Typography></>
                            ) :
                            <Typography variant="overline">
                                {
                                    props.fabric?.title && props.colour?.name
                                        ? `${props.fabric.title}, ${props.colour.name}`
                                        : props.fabric?.title || props.colour?.name || '\u00A0'}
                            </Typography>
                        }
                    </Box>
                    {props.measurements.map((measurement, index) => (
                        <MultipleFurnishingSummary key={index} measurement={measurement}/>
                    ))}
                    <Accordion
                        disableGutters
                        elevation={0}
                        expanded={expanded === 'panel1'}
                        onChange={handleChange('panel1')}
                        square={true}
                        sx={{
                            borderRadius: 0,
                            borderBottom: `1px solid ${Colours.sl_grey}`,
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            sx={{
                                borderTop: `1px solid ${Colours.sl_grey}`,
                                borderBottom: `1px solid ${Colours.sl_grey}`,
                            }}
                        >
                            <Typography sx={{color: Colours.sl_textSecondary}}>
                                {expanded === 'panel1' ? 'hide details' : 'show details'}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{padding: 0}}>
                            <TableContainer>
                                <Table size="small">
                                    <TableBody>
                                        {getDetailsRows().map((row) => (
                                            <TableRow
                                                key={row.key}
                                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                            >
                                                <TableCell component="th" scope="row">
                                                    <b>{row.key}</b>
                                                </TableCell>
                                                <TableCell align="left">{row.value}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Box>
            <Box>
                <Divider/>
                <Box sx={{paddingTop: '8px', paddingLeft: '16px', marginBottom: '-5px'}}>
                    <Typography variant="overline" color={Colours.sl_textSecondary}>
                        <b>Total Price</b>
                    </Typography>
                </Box>
                <Box>
                    <Typography paddingLeft="16px" variant="h3" color={Colours.sl_secondary}>
                        ${props.totalPrice}
                    </Typography>
                </Box>
                <Box sx={{padding: '16px 16px 16px 16px', textAlign: 'center'}}>
                    <Button
                        disabled={!isOrderComplete()}
                        variant="outlined"
                        size="large"
                        sx={{width: '100%', color: Colours.sl_black}}
                        onClick={handleModalOpen}
                    >
                        Generate Order Form
                    </Button>
                </Box>
            </Box>
            <CustomOrderFormModal open={isModalOpen} onClose={handleModalClose}/>
        </>
    );
}