import React from 'react';
import { FormControl, RadioGroup, FormControlLabel, Radio, Typography } from "@mui/material";

interface CustomRadioGroupProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DualRadioSelect: React.FC<CustomRadioGroupProps> = ({ value, onChange }) => {
    return (
        <FormControl>
            <RadioGroup
                row
                aria-labelledby="custom-radio-group-label"
                value={value}
                onChange={onChange}
                name="custom-radio-group"
            >
                <FormControlLabel
                    value="single"
                    control={<Radio />}
                    label={<Typography variant="overline">Single</Typography>}
                />
                <FormControlLabel
                    value="dual"
                    control={<Radio />}
                    label={<Typography variant="overline">Dual</Typography>}
                />
            </RadioGroup>
        </FormControl>
    );
};

export default DualRadioSelect;
