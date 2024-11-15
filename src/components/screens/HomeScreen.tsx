// First, let's create a custom hook for scroll animations
import './HomeScreen.css';
import {Box, Button, Typography, useMediaQuery} from "@mui/material";
import {Colours} from "../styling/colours.tsx";
import {useRef, useEffect, useState} from "react";
import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HomeFurnishingCardsSmall from "../custom/HomeFurnishingCardsSmall.tsx";
import HomeFurnishingCardsLarge from "../custom/HomeFurnishingCardsLarge.tsx";
import HomeNavigationGrid from "../custom/HomeNavigationGrid.tsx";

import logoImage from '../images/shadelightlogoblack.png';
import shadelightLogoWhite from '../images/shadelightlogowhite.png';

// Custom hook for scroll animations
const useScrollAnimation = (threshold = 0.2) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            {
                threshold,
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold, isVisible]);

    return [ref, isVisible] as const;
};

// Add animation styles to CSS
const animationStyles = {
    fadeUp: {
        opacity: 0,
        transform: 'translateY(30px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
    },
    fadeIn: {
        opacity: 0,
        transition: 'opacity 0.8s ease-out',
    },
    fadeLeft: {
        opacity: 0,
        transform: 'translateX(-30px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
    },
    fadeRight: {
        opacity: 0,
        transform: 'translateX(30px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
    },
    visible: {
        opacity: 1,
        transform: 'none',
    },
};

function HomeScreen() {
    const totalLifestyleRef = useRef<HTMLDivElement | null>(null);
    const isNarrowScreen = useMediaQuery('(max-width: 750px)');
    const isMobileScreen = useMediaQuery('(max-width: 600px)');

    // Scroll animation refs
    const [lifestyleRef, isLifestyleVisible] = useScrollAnimation();
    const [contactRef, isContactVisible] = useScrollAnimation();

    const scrollToLifestyle = () => {
        if (totalLifestyleRef.current) {
            totalLifestyleRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
    };

    const headingVariant = isMobileScreen ? "h3" : "h2";
    const bodyTextVariant = isMobileScreen ? "body2" : "body1";
    const addressVariant = isMobileScreen ? "subtitle1" : "h6";

    return (
        <>
            <section className="hero">
                <div className="overlay">
                    <img
                        src={shadelightLogoWhite}
                        alt="Logo"
                        className="logo"
                        style={{
                            width: isMobileScreen ? '200px' : 'auto',
                            height: 'auto'
                        }}
                    />
                    <Button
                        variant="outlined"
                        size={isMobileScreen ? "medium" : "large"}
                        sx={{
                            width: isMobileScreen ? '160px' : '200px',
                            color: 'white',
                            borderColor: 'white',
                            '&:hover': {
                                borderColor: Colours.sl_secondary,
                                color: Colours.sl_secondary,
                            },
                        }}
                        onClick={scrollToLifestyle}
                    >
                        Explore
                    </Button>
                </div>
            </section>
            <section
                ref={lifestyleRef}
                className="content"
                style={{
                    textAlign: isMobileScreen ? 'left' : 'right',
                    ...animationStyles.fadeUp,
                    ...(isLifestyleVisible && animationStyles.visible),
                }}
            >
                <Typography
                    color={Colours.sl_black}
                    variant={headingVariant}
                    sx={{
                        paddingBottom: isMobileScreen ? '15px' : '20px',
                        fontSize: isMobileScreen ? '2.3rem' : undefined,
                    }}
                    className="heading"
                >
                    The Total Lifestyle Solution
                </Typography>
                <Typography
                    color={Colours.sl_black}
                    variant={bodyTextVariant}
                    className="text"
                    sx={{
                        fontSize: isMobileScreen ? '0.875rem' : undefined,
                        lineHeight: isMobileScreen ? '1.5' : undefined,
                        padding: isMobileScreen ? '15px 0' : undefined,
                    }}
                >
                    The formula is simple. You and what you want, cutting-edge development, aspirational design and
                    premium manufacturing. Using fabrics and systems from Australia and Europe, Shadelight offer the
                    highest level of sophisticated window furnishings. Understanding that a curtain must draw around a
                    room, shutting in and not out – we create ultra-modern looks with designer fashion-magazine
                    finishes.
                </Typography>
                <section ref={totalLifestyleRef}>
                </section>
            </section>
            <section>
                {isNarrowScreen ? (
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            margin: 'auto',
                            width: '100%',
                        }}
                    >
                        <HomeFurnishingCardsSmall/>
                    </Box>
                ) : (
                    <>
                        <HomeFurnishingCardsLarge/>
                        <section className="content">
                        </section>
                        <HomeNavigationGrid/>
                    </>
                )}
            </section>
            <Box
                ref={contactRef}
                sx={{
                    width: "100%",
                    height: isMobileScreen ? "60vh" : "70vh",
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                style={{
                    ...animationStyles.fadeUp,
                    ...(isContactVisible && animationStyles.visible),
                }}
            >
                <Box
                    sx={{
                        width: isMobileScreen ? "90%" : "60%",
                        textAlign: 'center',
                        margin: '0 auto',
                    }}
                >
                    <Box
                        component="img"
                        src={logoImage}
                        alt="Shadelight Logo"
                        sx={{
                            width: '100%',
                            maxWidth: isMobileScreen ? '300px' : '400px',
                            height: 'auto',
                            marginBottom: isMobileScreen ? 1 : 2,
                        }}
                    />
                    <Typography
                        variant={addressVariant}
                        color={Colours.sl_black}
                        sx={{
                            fontSize: isMobileScreen ? '1rem' : undefined,
                            marginBottom: isMobileScreen ? 1 : undefined
                        }}
                    >
                        Visit our showroom and explore our range
                    </Typography>

                    <Typography
                        variant={addressVariant}
                        color={Colours.sl_textSecondary}
                        sx={{
                            textAlign: 'center',
                            marginTop: isMobileScreen ? 1 : 2,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: isMobileScreen ? '0.875rem' : undefined
                        }}
                    >
                        <PlaceIcon sx={{marginRight: 1, fontSize: isMobileScreen ? '1.2rem' : undefined}}/>
                        23 Roberna St, Moorabbin VIC 3189
                    </Typography>
                    <Typography
                        variant={addressVariant}
                        color={Colours.sl_textSecondary}
                        sx={{
                            textAlign: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: isMobileScreen ? '0.875rem' : undefined
                        }}
                    >
                        <AccessTimeIcon sx={{marginRight: 1, fontSize: isMobileScreen ? '1.2rem' : undefined}}/>
                        Mon to Fri: 8am - 4pm
                    </Typography>
                </Box>
            </Box>
        </>
    );
}

export default HomeScreen;