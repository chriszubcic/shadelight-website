import React from 'react';
import CardMedia from "@mui/material/CardMedia";
import {Box, Button, Typography} from "@mui/material";
import Card from "@mui/material/Card";
import {useNavigate} from "react-router-dom";
import {Colours} from "../styling/colours.tsx";  // Assuming you are using React Router

// Define the interface for props
interface HomeFurnishingCardsProps {
    text: string;
    route: string;
    image: string;
}

const HomeFurnishingCards: React.FC<HomeFurnishingCardsProps> = ({text, route, image}) => {
    const navigate = useNavigate();

    return (
        <Card
            sx={{
                maxWidth: "40vw",
                width: '100%',
                height: '60vh',
                margin: "auto",
                borderRadius: 1,
                position: 'relative',  // Ensure we can overlay content
                overflow: 'hidden',    // Crop content that overflows the card's boundary
            }}
        >
            <CardMedia
                image={image}  // Dynamic background image passed as prop
                sx={{
                    width: "100%",
                    height: '60vh',
                    position: 'relative',
                    zIndex: 1, // Ensure image stays behind the text and button
                }}
            >
                {/* Gradient overlay */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))",
                        zIndex: 2,  // Ensure gradient is on top of the image
                    }}
                />

                {/* Content (text + button) */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: '7%',  // Position content slightly above the bottom
                        left: '50%',
                        transform: 'translateX(-50%)',  // Center content horizontally
                        zIndex: 3,  // Ensure content is on top of the gradient and image
                        textAlign: 'center', // Center text and button
                        color: 'white',
                    }}
                >
                    {/* Dynamic Text */}
                    <Typography variant="h3" sx={{marginBottom: 2}}>
                        {text}
                    </Typography>

                    {/* Dynamic Button */}
                    <Button
                        variant="outlined"
                        size="large"
                        sx={{
                            width: '150px',
                            color: 'white',
                            borderColor: 'white',
                            '&:hover': {
                                borderColor: Colours.sl_secondary,
                                color: Colours.sl_secondary,
                            },
                        }}
                        onClick={() => navigate(route)}
                    >
                        Shop
                    </Button>
                </Box>
            </CardMedia>
        </Card>
    );
}

export default HomeFurnishingCards;
