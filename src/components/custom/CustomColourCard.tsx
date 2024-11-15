import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {Typography} from "@mui/material";
import {Colours} from "../styling/colours.tsx";
import Box from "@mui/material/Box";

interface CustomFurnishingTypeProps {
    id: string;
    colour: string;
}

const CustomColourCard = ({id, colour}: CustomFurnishingTypeProps) => {
    return (
        <Box
            sx={{padding: '10px'}}
        >
            <Card
                sx={{
                    width: '25vw',
                    maxWidth: 304,
                    margin: "auto",
                    borderRadius: 1,
                    border: colour ? `3px solid ${Colours.sl_secondary}` : '3px solid transparent',
                    position: 'relative',
                }}
            >
                <Box
                    sx={{
                        backgroundColor: id,
                        width: "30vw",
                        height: 150,
                    }}
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="subtitle1"
                        color={Colours.sl_black}
                        component="div"
                        sx={{
                            textAlign: 'center',
                            mt: -1.75,
                            mb: -1.70,
                        }}
                    >
                        {colour}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default CustomColourCard;
