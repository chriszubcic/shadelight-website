import {Colours} from "../styling/colours.tsx";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {MeasurementCard} from "./CustomMeasurements.tsx";

interface MultipleFurnishingSummaryProps {
    measurement: MeasurementCard,
}

function MultipleFurnishingSummary({measurement}: MultipleFurnishingSummaryProps) {
    return (
        <Box
            sx={{
                borderTop: `1px solid ${Colours.sl_grey}`,
                borderRadius: 0,
                padding: '8px 16px',
            }}
        >
            <Typography variant="h6">
                {measurement.title ? measurement.title : '\u00A0'}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '8px',
                    marginRight: '30%',
                }}
            >
                {/* Width Column */}
                <Box sx={{minWidth: '80px'}}> {/* Set a fixed minimum width */}
                    <Typography variant="body1" sx={{fontWeight: 'bold'}}>
                        Width
                    </Typography>
                    <Typography variant="body1">
                        {measurement.width ? measurement.width + ' mm' : '0 mm'}
                    </Typography>
                </Box>

                {/* Drop Column */}
                <Box sx={{minWidth: '80px'}}> {/* Set a fixed minimum width */}
                    <Typography variant="body1" sx={{fontWeight: 'bold'}}>
                        Drop
                    </Typography>
                    <Typography variant="body1">
                        {measurement.drop ? measurement.drop + ' mm' : '0 mm'}
                    </Typography>
                </Box>
            </Box>

            <Typography variant="body1" sx={{marginTop: '16px'}}>
                <b>Control Side</b>
            </Typography>
            <Typography variant="body1">
                {measurement.selectedSide ? measurement.selectedSide : '\u00A0'}
            </Typography>
        </Box>
    );
}

export default MultipleFurnishingSummary;
