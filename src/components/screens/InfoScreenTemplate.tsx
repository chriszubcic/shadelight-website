import {
    Box,
    Grid,
    Typography,
    Button,
} from '@mui/material';
import {Colours} from "../styling/colours.tsx";
import {useNavigate} from "react-router-dom";
import {CustomFurnishingTypeProps} from "../custom/CustomFurnishingType.tsx";
import InfoQuickQuote from "../custom/InfoQuickQuote.tsx";
import {Link} from 'react-router-dom';

interface InfoScreenTemplateProps {
    title: string;
    description: string;
    furnishingTypes?: CustomFurnishingTypeProps[];
}

function InfoScreenTemplate({title, description, furnishingTypes}: InfoScreenTemplateProps) {
    const navigate = useNavigate();

    return (
        <Box
            marginTop={'125px'}
            marginLeft={"5vw"}
            marginRight={"5vw"}
            paddingBottom={"40px"}
        >
            <Grid container spacing={4}>
                {/* Left Box */}
                <Grid item xs={12} sm={7}>
                    <Box
                        sx={{
                            padding: {xs: 2, sm: 4}, // Padding inside the box, responsive
                            height: 'auto', // Adjust to fit content
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography variant="h2" gutterBottom>
                            {title}
                        </Typography>
                        <Typography variant="body1" paragraph>
                            {description}
                        </Typography>
                        {furnishingTypes &&
                            <>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    sx={{
                                        width: '150px',
                                        alignSelf: 'flex-start',
                                        '&:hover': {
                                            borderColor: Colours.sl_secondary,
                                            color: Colours.sl_secondary,
                                        },
                                    }}
                                    onClick={() => {
                                        navigate('/design', {state: {furnishing: title}}); // Pass the whole object
                                    }}
                                >
                                    Design
                                </Button>
                            </>
                        }
                        <Box sx={{mt: 4, mb: 4}}>
                            <Typography variant="h5" gutterBottom>
                                Options
                            </Typography>
                            {
                                furnishingTypes ?
                                    <Typography component="ul">
                                        {furnishingTypes.map((type) => (
                                            <Typography component="li" variant="body1" key={type.title}>
                                                {type.title}
                                            </Typography>
                                        ))}
                                    </Typography>
                                    :
                                    <Typography component="li" variant="body1">
                                        <Link to="/contact" style={{ color: 'black', textDecoration: 'none' }}><u>Contact us</u></Link> to inquire about our {title.toLowerCase()} options.
                                    </Typography>
                            }
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Box
                        sx={{
                            height: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-end',
                            marginTop: '125px',
                        }}
                    >
                        {/* Image Grid */}
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={8}>
                                <Box
                                    component="img"
                                    src="src/components/images/blockout_blind.png"
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        aspectRatio: '1 / 1',
                                        objectFit: 'cover',
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6} sm={4} sx={{gridRow: 'span 2'}}>
                                <Box
                                    component="img"
                                    src="src/components/images/blockout_blind.png"
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
                                    src="src/components/images/blockout_blind.png"
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
                                    src="src/components/images/blockout_blind.png"
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        aspectRatio: '2 / 1',
                                        objectFit: 'cover',
                                    }}
                                />
                            </Grid>
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
                    paddingBottom: "40px",
                    paddingTop: "80px",
                }}
            >
                {furnishingTypes &&
                    <InfoQuickQuote title={title} furnishingTypes={furnishingTypes}/>
                }
            </Box>
        </Box>
    );
}

export default InfoScreenTemplate;
