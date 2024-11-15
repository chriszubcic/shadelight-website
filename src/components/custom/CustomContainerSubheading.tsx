import {Box, Typography} from "@mui/material";
import {Colours} from "../styling/colours.tsx";

interface CustomContainerHeadingProps {
    title: string;
}

function CustomContainerHeading({title}: CustomContainerHeadingProps) {
    return (
        <Box mb={1} sx={{display: 'flex', gap: 3}} alignItems="center">
            {/*<Box*/}
            {/*    sx={{*/}
            {/*        width: 30,*/}
            {/*        height: 30,*/}
            {/*        borderRadius: '50%',*/}
            {/*    }}*/}
            {/*>*/}
            {/*    /!* Empty box to preserve spacing *!/*/}
            {/*</Box>*/}
            <Typography variant="overline" color={Colours.sl_black}>
                Select {title}
            </Typography>
        </Box>
    );
}

export default CustomContainerHeading;
