import React, {useEffect, useState} from 'react';
import {Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import DualRadioSelect from "./DualRadioSelect.tsx";
import CustomMeasurementInput from "./CustomMeasurementInput.tsx";
import {CustomFabricProps} from "./CustomFabricCard.tsx";
import Pricing from "../data/pricing.tsx";
import {CustomDualFurnishingTypeStateProps, CustomFurnishingTypeProps} from "./CustomFurnishingType.tsx";
import {DualBlinds} from "../data/dualBlinds.tsx";
import {Blinds} from "../data/blinds.tsx";

interface InfoQuickQuoteProps {
    title: string;
    furnishingTypes: CustomFurnishingTypeProps[] | CustomDualFurnishingTypeStateProps[];
}

function InfoQuickQuote({title, furnishingTypes}: InfoQuickQuoteProps) {
    const [radioValue, setRadioValue] = useState('single');
    const [width, setWidth] = useState(0);
    const [drop, setDrop] = useState(0);

    const minWidth = 610;
    const maxWidth = 3010;
    const minDrop = 600;
    const maxDrop = 3300;

    // Function to calculate the estimated price based on width, drop, and fabric type
    function calculatePrice(fabricType: CustomFabricProps, width: number, drop: number, fabricType_secondary?: CustomFabricProps) {
        if (fabricType_secondary) {
            if (width >= minWidth && drop >= minDrop) {
                return (Number(Pricing.getPrice(width, drop, fabricType.priceGroup)) + Number(Pricing.getPrice(width, drop, fabricType_secondary.priceGroup))).toFixed(2);
            } else {
                return (Number(fabricType.minPrice) + Number(fabricType.minPrice)).toFixed(2);
            }
        } else {
            if (width >= minWidth && drop >= minDrop) {
                return Pricing.getPrice(width, drop, fabricType.priceGroup).toFixed(2);
            }
            return fabricType.minPrice.toFixed(2);
        }
    }

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioValue(event.target.value);
    };

    // State for storing the rows based on radio selection
    const [rows, setRows] = useState<{option: string; from_price: string}[]>([]);
    const [currentFurnishingTypes, setCurrentFurnishingTypes] = useState<CustomFurnishingTypeProps[]|CustomDualFurnishingTypeStateProps[]>(furnishingTypes);

    // useEffect to update furnishingTypes based on radio value
    useEffect(() => {
        if (radioValue === 'dual') {
            setCurrentFurnishingTypes(DualBlinds.types); // Use dualblinds.types if radio is "dual"
        } else {
            setCurrentFurnishingTypes(Blinds.types); // Default furnishingTypes if radio is "single"
        }
    }, [radioValue, furnishingTypes]);

    // Memoized rows to ensure price updates only when width or drop changes
    useEffect(() => {
        const newRows = currentFurnishingTypes.map((furnishing) => {
            let price;
            if (radioValue === 'dual') {
                // @ts-expect-error if radioValue is dual, will have fabrics_secondary prop
                price = calculatePrice(furnishing.fabrics[0], width, drop, furnishing.fabrics_secondary[0]);
            } else {
                price = calculatePrice(furnishing.fabrics[0], width, drop);
            }
            return {
                option: furnishing.title,
                from_price: price,
            }
        });
        setRows(newRows);
    }, [currentFurnishingTypes, width, drop]); // Update rows when furnishingTypes change

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Typography variant="h3" gutterBottom>
                Quick Quote
            </Typography>
            {title === "Roller Blinds" ? (
                <DualRadioSelect value={radioValue} onChange={handleRadioChange}/>
            ) : null}
            <Box sx={{display: 'flex', justifyContent: 'center', marginTop: 2}}>
                <CustomMeasurementInput
                    label="Width"
                    value={width.toString()}
                    onChange={(value: string) => setWidth(Number(value))}
                    min={minWidth}
                    max={maxWidth}
                />
                <CustomMeasurementInput
                    label="Drop"
                    value={drop.toString()}
                    onChange={(value: string) => setDrop(Number(value))}
                    min={minDrop}
                    max={maxDrop}
                />
            </Box>
            <TableContainer sx={{marginTop: 2, display: 'flex', justifyContent: 'center'}}>
                <Table sx={{width: '100%', textAlign: 'center'}} size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{fontWeight: 'bold'}}>Option</TableCell>
                            <TableCell sx={{fontWeight: 'bold'}} align="right">From Price (AUD)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.option}</TableCell>
                                <TableCell align="right">${row.from_price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default InfoQuickQuote;
