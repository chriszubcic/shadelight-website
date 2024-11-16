import {
    Box,
    Grid,
    Typography,
    Button,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import {Colours} from "../styling/colours.tsx";
import {useNavigate} from "react-router-dom";
import {CustomFurnishingTypeProps} from "../custom/CustomFurnishingType.tsx";
import InfoQuickQuote from "../custom/InfoQuickQuote.tsx";
import {Link} from 'react-router-dom';

import blindsImage from '../images/blockout_blind.png';

interface InfoScreenTemplateProps {
    title: string;
    description: string;
    furnishingTypes?: CustomFurnishingTypeProps[];
}

function InfoScreenTemplate({title, description, furnishingTypes}: InfoScreenTemplateProps) {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));
    const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    return (
        <Box
            sx={{
                mt: {xs: '110px', sm: '125px'},
                mx: '5vw',
            }}
        >
            <Grid container>
                {/* Left Box */}
                <Grid item xs={12} lg={7}>
                    <Box
                        sx={{
                            height: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            paddingRight: {sm: 5},
                        }}
                    >
                        <Typography
                            variant="h2"
                            gutterBottom
                            sx={{
                                fontSize: {xs: '2rem', sm: '3rem'}
                            }}
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="body1"
                            paragraph
                            sx={{
                                fontSize: {xs: '0.9rem', sm: '1rem'}
                            }}
                        >
                            {description}
                        </Typography>
                        {furnishingTypes &&
                            <Button
                                variant="outlined"
                                size="large"
                                sx={{
                                    width: {xs: '120px', sm: '150px'},
                                    alignSelf: {xs: 'flex-end', sm: 'flex-start'},
                                    '&:hover': {
                                        borderColor: Colours.sl_secondary,
                                        color: Colours.sl_secondary,
                                    },
                                }}
                                onClick={() => navigate('/design', {state: {furnishing: title}})}
                            >
                                Design
                            </Button>
                        }
                        <Box sx={{mt: {xs: 2, sm: 4}, mb: {xs: 2, sm: 4}}}>
                            <Typography
                                variant="h5"
                                gutterBottom
                                sx={{
                                    fontSize: {xs: '1.2rem', sm: '1.5rem'}
                                }}
                            >
                                Options
                            </Typography>
                            {furnishingTypes ? (
                                <Typography component="ul">
                                    {furnishingTypes.map((type) => (
                                        <Typography
                                            component="li"
                                            variant="body1"
                                            key={type.title}
                                            sx={{
                                                fontSize: {xs: '0.9rem', sm: '1rem'}
                                            }}
                                        >
                                            {type.title}
                                        </Typography>
                                    ))}
                                </Typography>
                            ) : (
                                <Typography
                                    component="li"
                                    variant="body1"
                                    sx={{
                                        fontSize: {xs: '0.9rem', sm: '1rem'}
                                    }}
                                >
                                    <Link to="/contact" style={{color: 'black', textDecoration: 'none'}}>
                                        <u>Contact us</u>
                                    </Link> to inquire about our {title.toLowerCase()} options.
                                </Typography>
                            )}
                        </Box>
                    </Box>
                </Grid>

                {/* Right Box - Image Grid */}
                <Grid item xs={12} lg={5}>
                    <Box
                        sx={{
                            height: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-end',
                            marginTop: {xs: '30px', md: '80px'},
                        }}
                    >
                        {/* Conditional Image Grid */}
                        <Grid container spacing={2}>
                            {isSm || isMd ? (
                                <>
                                    <Grid item xs={7}>
                                        <Box
                                            component="img"
                                            src={blindsImage}
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                aspectRatio: '2 / 1',
                                                objectFit: 'cover',
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={5} sx={{gridRow: 'span 2'}}>
                                        <Box
                                            component="img"
                                            src={blindsImage}
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box
                                            component="img"
                                            src={blindsImage}
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                aspectRatio: '2 / 1',
                                                objectFit: 'cover',
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Box
                                            component="img"
                                            src={blindsImage}
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                aspectRatio: '2 / 1',
                                                objectFit: 'cover',
                                            }}
                                        />
                                    </Grid>
                                </>
                            ) : (
                                <>
                                    <Grid item xs={7}>
                                        <Box
                                            component="img"
                                            src={blindsImage}
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                aspectRatio: '1 / 1',
                                                objectFit: 'cover',
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={5} sx={{gridRow: 'span 2'}}>
                                        <Box
                                            component="img"
                                            src={blindsImage}
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box
                                            component="img"
                                            src={blindsImage}
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                aspectRatio: '1 / 1',
                                                objectFit: 'cover',
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Box
                                            component="img"
                                            src={blindsImage}
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                aspectRatio: '2 / 1',
                                                objectFit: 'cover',
                                            }}
                                        />
                                    </Grid>
                                </>
                            )}
                        </Grid>
                    </Box>
                </Grid>
            </Grid>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    pb: '40px',
                    pt: {xs: '40px', sm: '80px'},
                }}
            >
                {furnishingTypes && <InfoQuickQuote title={title} furnishingTypes={furnishingTypes}/>}
            </Box>
        </Box>
    );
}

export default InfoScreenTemplate;
