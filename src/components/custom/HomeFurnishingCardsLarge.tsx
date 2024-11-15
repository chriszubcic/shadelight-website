import React from 'react';
import {Box} from "@mui/material";
import HomeFurnishingCards from "../custom/HomeFurnishingCards";  // Ensure this path is correct for your setup

const HomeFurnishingCardsLarge: React.FC = () => {

    return (
        <section>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 2,
                    margin: 'auto',
                    maxWidth: '95vw',
                }}
            >
                <HomeFurnishingCards
                    text="Blinds"
                    route="/blinds"
                    image="src/components/images/blockout_blind.png"  // Ensure correct relative path
                />
                <HomeFurnishingCards
                    text="Curtains"
                    route="/curtains"
                    image="src/components/images/light_filtering.png"  // Ensure correct relative path
                />
                <HomeFurnishingCards
                    text="Shutters"
                    route="/shutters"
                    image="src/components/images/sunscreen_blind.png"  // Ensure correct relative path
                />
            </Box>
        </section>
    );
}

export default HomeFurnishingCardsLarge;
