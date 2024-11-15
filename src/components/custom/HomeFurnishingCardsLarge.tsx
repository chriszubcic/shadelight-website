import React from 'react';
import {Box} from "@mui/material";
import HomeFurnishingCards from "../custom/HomeFurnishingCards";  // Ensure this path is correct for your setup

import blockout_blind from '../images/blockout_blind.png';
import light_filtering from '../images/light_filtering.png';
import sunscreen_blind from '../images/sunscreen_blind.png';

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
                    image={blockout_blind}  // Ensure correct relative path
                />
                <HomeFurnishingCards
                    text="Curtains"
                    route="/curtains"
                    image={light_filtering}  // Ensure correct relative path
                />
                <HomeFurnishingCards
                    text="Shutters"
                    route="/shutters"
                    image={sunscreen_blind} // Ensure correct relative path
                />
            </Box>
        </section>
    );
}

export default HomeFurnishingCardsLarge;
