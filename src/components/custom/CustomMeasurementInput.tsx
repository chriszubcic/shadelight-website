import React, {useCallback} from 'react';
import {Box, FormControl, FormHelperText, InputAdornment, TextField, Typography} from "@mui/material";
import {Colours} from "../styling/colours.tsx";

interface MeasurementInputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    min: number;
    max: number;
}

const CustomMeasurementInput: React.FC<MeasurementInputProps> = ({label, value, onChange, min, max}) => {
    const handleInputChange = useCallback((value: string, currentValue: string) => {
        const numericValue = value.replace(/[^0-9]/g, '');
        onChange(numericValue.length <= 4 ? numericValue : currentValue);
    }, [onChange]);

    const getLabelStyle = useCallback(() => {
        if (value === '') return {};
        return Number(value) < min || Number(value) > max ? {color: Colours.sl_error} : {color: Colours.sl_textSecondary};
    }, [value, min, max]);

    const getHelperText = useCallback(() => {
        const minText = `min: ${min}mm`;
        const maxText = `max: ${max}mm`;
        const minStyle = value !== '' && Number(value) < min ? Colours.sl_error : Colours.sl_textSecondary;
        const maxStyle = value !== '' && Number(value) > max ? Colours.sl_error : Colours.sl_textSecondary;

        return {minText, maxText, minStyle, maxStyle};
    }, [value, min, max]);

    const renderHelperText = useCallback(() => {
        const {minText, maxText, minStyle, maxStyle} = getHelperText();
        return (
            <span>
                <span style={{color: minStyle}}>{minText}</span> / <span style={{color: maxStyle}}>{maxText}</span>
            </span>
        );
    }, [getHelperText]);

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', flex: 1}}>
            <Typography variant="overline" sx={{...getLabelStyle(), marginBottom: -1}} component="div">
                {label}
            </Typography>
            <FormControl sx={{width: '95%'}}>
                <TextField
                    variant="filled"
                    value={value}
                    onChange={(e) => handleInputChange(e.target.value, value)}
                    error={value !== '' && (Number(value) < min || Number(value) > max)}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">mm</InputAdornment>,
                        inputProps: {
                            maxLength: 4,
                            inputMode: 'numeric',
                            pattern: '[0-9]*'
                        },
                    }}
                    sx={{
                        '& input': {
                            paddingTop: '10px',
                            paddingBottom: '10px',
                            lineHeight: '1.5',
                            height: 'auto',
                        },
                        '& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button': {
                            '-webkit-appearance': 'none',
                            margin: 0,
                        },
                        '& .MuiInputBase-root': {
                            borderRadius: 0,
                        }
                    }}
                />
                <FormHelperText sx={{
                    textAlign: 'center',
                    fontSize: {xs: '0.63rem', sm: '0.8rem'} // Smaller text for xs screens
                }}>
                    {renderHelperText()}
                </FormHelperText>
            </FormControl>
        </Box>
    );
};

export default CustomMeasurementInput;
