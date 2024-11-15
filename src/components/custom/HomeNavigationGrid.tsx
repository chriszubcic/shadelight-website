import {Grid, Paper, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';

import blindsImage from '../images/blockout_blind.png';
import curtainsImage from '../images/home_backdrop.png';
import shuttersImage from '../images/light_filtering.png';
import zipScreensImage from '../images/sunscreen_blind.png';
import contactImage from '../images/lounge.jpeg';
import motorisationImage from '../images/lounge2.png';
import {Colours} from "../styling/colours.tsx";

// Base Tile style
const Tile = styled(Paper)({
    width: '100%',
    aspectRatio: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 0,
    boxShadow: 'none',
    position: 'relative',
});

// Flip container
const FlipContainer = styled('div')({
    width: '100%',
    aspectRatio: '1',
    perspective: '1000px',
    '&.show-card': {
        '& .flipper': {
            transform: 'rotateY(0deg)',
        }
    }
});

// Flipper
const Flipper = styled('div')({
    position: 'relative',
    width: '100%',
    height: '100%',
    transformStyle: 'preserve-3d',
    transform: 'rotateY(-180deg)',
    transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
});

// Front side (initially hidden)
const FrontSide = styled('div')({
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    cursor: 'pointer',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 1,
    },
    '& .MuiTypography-root': {
        position: 'relative',
        zIndex: 2,
        color: '#fff',
    }
});

// Back side (initially visible)
const BackSide = styled('div')({
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    transform: 'rotateY(180deg)',
    backgroundColor: Colours.sl_black,
});

interface TileData {
    id: number;
    text?: string;
    color?: 'black' | 'blue' | 'grey';
    backgroundImage?: string;
}

const HomeNavigationGrid = () => {
    const navigate = useNavigate();
    const [visibleTiles, setVisibleTiles] = useState<number[]>([]);
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                }
            },
            {threshold: 0.2}
        );

        const gridElement = document.getElementById('navigation-grid');
        if (gridElement) {
            observer.observe(gridElement);
        }

        return () => {
            if (gridElement) {
                observer.unobserve(gridElement);
            }
        };
    }, []);

    useEffect(() => {
        if (isIntersecting) {
            // Stagger the animation of tiles that have text
            const navigationTiles = tiles.filter(tile => tile.text).map(tile => tile.id);
            let delay = 0;

            navigationTiles.forEach((tileId) => {
                setTimeout(() => {
                    setVisibleTiles(prev => [...prev, tileId]);
                }, delay);
                delay += 200; // 200ms delay between each tile flip
            });
        }
    }, [isIntersecting]);

    // Hardcoded tile data
    const tiles: TileData[] = [
        {id: 1, color: "black"},
        {id: 2, text: "Blinds", backgroundImage: blindsImage},
        {id: 3, color: "blue"},
        {id: 4, color: "black"},
        {id: 5, text: "Curtains", backgroundImage: curtainsImage},
        {id: 6, color: "black"},
        {id: 7, text: "Shutters", backgroundImage: shuttersImage},
        {id: 8, color: "black"},
        {id: 9, color: "black"},
        {id: 10, text: "Externals", backgroundImage: zipScreensImage},
        {id: 11, color: "black"},
        {id: 12, color: "blue"},
        {id: 13, color: "black"},
        {id: 14, color: "blue"},
        {id: 15, text: "Motorisation", backgroundImage: motorisationImage},
        {id: 16, color: "black"},
        {id: 17, color: "blue"},
        {id: 18, text: "Contact", backgroundImage: contactImage},
    ];

    const handleTileClick = (text?: string) => {
        if (text) {
            navigate(`/${text.toLowerCase().replace(/\s+/g, '-')}`);
        }
    };

    return (
        <Grid container spacing={0.5} columns={6} id="navigation-grid">
            {tiles.map((tile) => (
                <Grid item xs={1} key={tile.id}>
                    {tile.text ? (
                        <FlipContainer className={visibleTiles.includes(tile.id) ? 'show-card' : ''}>
                            <Flipper className="flipper">
                                <FrontSide
                                    onClick={() => handleTileClick(tile.text)}
                                    style={{
                                        backgroundImage: tile.backgroundImage ? `url(${tile.backgroundImage})` : 'none',
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            textAlign: 'center',
                                            padding: '0.5rem',
                                        }}
                                    >
                                        {tile.text}
                                    </Typography>
                                </FrontSide>
                                <BackSide/>
                            </Flipper>
                        </FlipContainer>
                    ) : (
                        <Tile
                            sx={{
                                backgroundColor:
                                    tile.color === 'black' ? Colours.sl_black :
                                        tile.color === 'blue' ? Colours.sl_secondary :
                                            '#808080',
                            }}
                        />
                    )}
                </Grid>
            ))}
        </Grid>
    );
};

export default HomeNavigationGrid;