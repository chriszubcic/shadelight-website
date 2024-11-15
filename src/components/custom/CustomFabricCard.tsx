import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {Typography} from "@mui/material";
import {Colours} from "../styling/colours.tsx";
import React, {useState} from "react";
import {alpha} from "@mui/material/styles";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CustomFabricModal from "./CustomFabricModal.tsx";
import {ColourWheelProps} from "./ColourWheel.tsx";

export interface CustomFabricProps {
    id: string;
    image: string;
    price: number;
    title: string;
    description: string;
    colours: ColourWheelProps[],
    minPrice: number,
    widthLimits: number[],
    heightLimits: number[],
    priceGroup: number,
}

interface CustomFabricStateProps extends CustomFabricProps {
    isSelected: boolean;
    onSelect: (fabricType: CustomFabricProps) => void;
}

const CustomFabricCard = ({
                              id,
                              image,
                              price,
                              title,
                              description,
                              isSelected,
                              onSelect,
                              colours,
                              minPrice,
                              heightLimits,
                              widthLimits,
                              priceGroup
                          }: CustomFabricStateProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const transparentBorder = alpha(Colours.sl_secondary, 0.5);

    const handleClick = () => {
        onSelect({id, image, price, title, description, colours, minPrice, heightLimits, widthLimits, priceGroup});
    };

    const handleInfoClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Card
                sx={{
                    width: '100%',
                    borderRadius: 1,
                    borderColor: 'transparent',
                    border: isSelected ? `3px solid ${Colours.sl_secondary}` : '3px solid transparent',
                    position: 'relative',
                    cursor: 'pointer',
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
                        height: 120,
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
                        ${minPrice.toString()}
                    </Typography>
                </CardContent>
                <InfoOutlinedIcon
                    sx={{
                        position: 'absolute',
                        bottom: 26,
                        right: 3,
                        color: Colours.sl_textSecondary,
                        fontSize: 20,
                        cursor: 'pointer',
                        borderRadius: '50%',
                        backgroundColor: 'transparent',
                        "&:hover": {
                            color: Colours.sl_secondary
                        },
                    }}
                    onClick={handleInfoClick}
                />
            </Card>
            <CustomFabricModal title={title} image={image} open={isModalOpen} onClose={handleCloseModal}/>
        </>
    );
};

export default CustomFabricCard;