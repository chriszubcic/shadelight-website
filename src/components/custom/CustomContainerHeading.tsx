import { Box, IconButton, Typography } from "@mui/material";
import { Colours } from "../styling/colours.tsx";

interface CustomContainerHeadingProps {
    heading_no: string;
    title: string;
}

function CustomContainerHeading({ heading_no, title }: CustomContainerHeadingProps) {
    return (
        <Box mb={2} sx={{ display: 'flex', gap: { xs: 2, sm: 3 } }} alignItems="center">
            <IconButton
                sx={{
                    border: `2px solid ${Colours.sl_black}`,
                    color: Colours.sl_black,
                    width: { xs: 24, sm: 30 }, // Smaller size on small screens
                    height: { xs: 24, sm: 30 }, // Smaller size on small screens
                    borderRadius: '50%',
                    pointerEvents: 'none'
                }}
            >
                <Typography variant="h6" sx={{ fontSize: { xs: '0.875rem', sm: 'inherit' } }}>
                    <b>{heading_no}</b>
                </Typography>
            </IconButton>
            <Typography
                variant="h4"
                color={Colours.sl_black}
                sx={{
                    fontSize: { xs: '1.4rem', sm: 'inherit' }, // Small font size on xs screens, revert on larger screens
                    variant: { sm: 'h4', xs: 'body1' } // Adjust variant based on screen size
                }}
            >
                {title}
            </Typography>
        </Box>
    );
}

export default CustomContainerHeading;
