import React from "react";
import {alpha} from "@mui/material/styles";
import {Colours} from "../styling/colours.tsx";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import {Typography} from "@mui/material";

export interface CustomOptionProps {
    id: string;
    image: string;
    price: number | null;
    title: string;
}

export interface CustomOptionStateProps extends CustomOptionProps {
    isSelected?: boolean | undefined;
    onSelect: (option: CustomOptionProps) => void;
}

const CustomOptionCard: React.FC<CustomOptionStateProps> = ({id, image, price, title, isSelected, onSelect}) => {
    const transparentBorder = alpha(Colours.sl_secondary, 0.5);

    const handleClick = () => {
        // console.log({id, image, price, title});
        onSelect({id, image, price, title});
    };

    return (
        <Card
            sx={{
                flex: "auto",
                maxWidth: '200px', // Maximum width for the card
                borderRadius: 1,
                borderColor: 'transparent',
                border: isSelected ? `3px solid ${Colours.sl_secondary}` : '3px solid transparent',
                position: 'relative',
                cursor: 'pointer',
                transition: "border-color 0.3s ease",
                "&:hover": {
                    borderColor: isSelected ? Colours.sl_secondary : transparentBorder
                },
                display: 'flex',
                flexDirection: 'column',
            }}
            onClick={handleClick}
        >
            <CardMedia
                image={image}
                sx={{
                    width: "60%",
                    height: 100,
                    objectFit: 'contain', // Ensures the image maintains its aspect ratio
                    margin: 'auto', // Centers the image horizontally
                    display: 'block' // Makes margin auto work for centering
                }}
            />
            <CardContent
                sx={{
                    flexGrow: 1,
                }}
            >
                <Typography
                    gutterBottom
                    variant="subtitle1"
                    color={Colours.sl_black}
                    component="div"
                    sx={{
                        textAlign: 'center',
                        mt: -1.75
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    variant="caption"
                    color={Colours.sl_secondary}
                    sx={{
                        display: 'block',
                        mb: -1.70,
                        mt: -1.25,
                        textAlign: 'center',
                    }}
                >
                    {price !== null ? `+ $${price}` : ''}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CustomOptionCard;
