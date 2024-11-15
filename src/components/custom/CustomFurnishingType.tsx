import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {Typography} from "@mui/material";
import {Colours} from "../styling/colours.tsx";
import {alpha} from '@mui/material/styles';
import {CustomFabricProps} from "./CustomFabricCard.tsx";

export interface CustomFurnishingTypeProps {
    title: string;
    id: string;
    image: string;
    description: string;
    fabrics: CustomFabricProps[];
    minPrice: number;
    priceGroup: number;
}

export interface CustomDualFurnishingTypeStateProps extends CustomFurnishingTypeProps {
    fabrics_secondary: CustomFabricProps[]
}

interface CustomFurnishingTypeComponentProps extends CustomFurnishingTypeProps {
    isSelected: boolean;
    onSelect: (furnishingType: CustomFurnishingTypeProps) => void;
}

const CustomFurnishingType = ({id, image, minPrice, title, description, isSelected, onSelect, fabrics, priceGroup}: CustomFurnishingTypeComponentProps) => {
    const transparentBorder = alpha(Colours.sl_secondary, 0.5);

    const handleClick = () => {
        onSelect({id, image, minPrice, title, description, fabrics, priceGroup});
    };

    return (
        <Card
            sx={{
                minWidth: 280,
                width: '98%',
                height: '98%',
                margin: "auto",
                borderRadius: 1,
                cursor: 'pointer',
                border: isSelected ? `3px solid ${Colours.sl_secondary}` : '3px solid transparent',
                transition: "border-color 0.3s ease",
                "&:hover": {
                    borderColor: isSelected ? Colours.sl_secondary : transparentBorder
                },
            }}
            onClick={handleClick}
        >
            <CardMedia
                image={image}
                sx={{
                    width: "100%",
                    height: 250,
                }}
            />
            <CardContent>
                <Typography
                    variant="overline"
                    color={Colours.sl_secondary}
                    sx={{
                        display: 'block',
                        mb: -1,
                        mt: -1.25,
                    }}
                >
                    From ${minPrice.toString()}
                </Typography>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                >
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CustomFurnishingType;
