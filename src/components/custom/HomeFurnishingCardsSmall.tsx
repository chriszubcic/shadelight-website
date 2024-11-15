import CardMedia from "@mui/material/CardMedia";
import {Box, Typography} from "@mui/material";
import Card from "@mui/material/Card";
import {useNavigate} from "react-router-dom";
import blindsImage from '../images/blockout_blind.png';
import curtainsImage from '../images/home_backdrop.png';
import shuttersImage from '../images/light_filtering.png';
import zipScreensImage from '../images/sunscreen_blind.png';
import motorisationImage from '../images/lounge2.png';

function HomeFurnishingCardsSmall() {
    const navigate = useNavigate();

    const tiles = [
        {route: "/blinds", text: "Blinds", backgroundImage: blindsImage},
        {route: "/curtains", text: "Curtains", backgroundImage: curtainsImage},
        {route: "/shutters", text: "Shutters", backgroundImage: shuttersImage},
        {route: "/externals", text: "Externals", backgroundImage: zipScreensImage},
        {route: "/motorisation", text: "Motorisation", backgroundImage: motorisationImage},
    ];

    return (
        <Box sx={{width: '100%', display: 'flex', flexDirection: 'column'}}>
            {tiles.map((tile, index) => (
                <Card
                    key={index}
                    sx={{
                        width: '100%',  // Ensure card takes the full width of its parent container
                        height: '15vh',
                        margin: "auto",
                        borderRadius: 0,
                        position: 'relative',
                        cursor: 'pointer',
                    }}
                    onClick={() => navigate(tile.route)}  // Navigate on card click
                >
                    <CardMedia
                        component="img"
                        image={tile.backgroundImage}
                        sx={{
                            width: "100%",  // Ensure image covers full width of the card
                            height: "100%",  // Ensure image covers the full height of the card
                            objectFit: "cover",  // Keep the aspect ratio, covering the area
                        }}
                    />

                    {/* Dark overlay */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: "rgba(0, 0, 0, 0.7)",  // Darker overlay
                            zIndex: 2,  // Ensure overlay stays on top of the image
                        }}
                    />

                    {/* Content (text) */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: '10%',
                            right: 0,
                            bottom: 0,
                            display: 'flex',
                            alignItems: 'center',  // Vertically center the content
                            zIndex: 3,  // Ensure content is on top of the gradient and image
                            color: 'white',
                        }}
                    >
                        <Typography variant="h5" sx={{textAlign: 'left'}}>
                            {tile.text}
                        </Typography>
                    </Box>
                </Card>
            ))}
        </Box>
    );
}

export default HomeFurnishingCardsSmall;
