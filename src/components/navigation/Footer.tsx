import {Box, Typography, Link, Grid} from '@mui/material';
import {Facebook, Instagram} from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceIcon from '@mui/icons-material/Place';
import {Colours} from "../styling/colours.tsx";
import {useNavigate} from "react-router-dom";
import './Footer.css'

const Footer = () => {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    return (
        <Box
            sx={{
                background: Colours.sl_black,
                color: 'white',
                py: 4,
                mt: 'auto',
                padding: 5,
            }}
        >
            <Grid container spacing={4} justifyContent="space-between">
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" sx={{mb: 2, paddingLeft: {xs: 2, sm: 0}}}>
                        About Us
                    </Typography>
                    <Typography variant="body2" sx={{paddingLeft: {xs: 2, sm: 0}}}>
                        We are a leading provider of home furnishing solutions. Our mission is to help you create a
                        comfortable and stylish living space.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" sx={{mb: 2, paddingLeft: {xs: 2, sm: 0}}}>
                        Quick Links
                    </Typography>
                    <Typography variant="body2" sx={{paddingLeft: {xs: 2, sm: 0}}}>
                        <div
                            className={"link"}
                            onClick={() => handleNavigation("/")}
                            style={{cursor: "pointer"}}
                        >
                            Home
                        </div>
                        <div className={"link"} onClick={() => handleNavigation("/blinds")}>
                            Roller Blinds
                        </div>
                        <div className={"link"} onClick={() => handleNavigation("/curtains")}>
                            Curtains
                        </div>
                        <div className={"link"} onClick={() => handleNavigation("/shutters")}>
                            Shutters
                        </div>
                        <div className={"link"} onClick={() => handleNavigation("/externals")}>
                            Externals
                        </div>
                        <div className={"link"} onClick={() => handleNavigation("/motorisation")}>
                            Motorisation
                        </div>
                        <div className={"link"} onClick={() => handleNavigation("/contact")}>
                            Contact Us
                        </div>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" sx={{mb: 2, paddingLeft: {xs: 2, sm: 0}}}>
                        Contact Us
                    </Typography>
                    <Box sx={{paddingLeft: {xs: 2, sm: 0}}}>
                        <Box sx={{display: 'flex', alignItems: 'center', mb: 1}}>
                            <EmailIcon sx={{mr: 1, fontSize: '1.2rem'}}/>
                            <Typography variant="body2">
                                info@shadelight.com.au
                            </Typography>
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center', mb: 1}}>
                            <PlaceIcon sx={{mr: 1, fontSize: '1.2rem'}}/>
                            <Typography variant="body2">
                                23 Roberna St, Moorabbin VIC 3189
                            </Typography>
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center', mb: 1}}>
                            <LocalPhoneIcon sx={{mr: 1, fontSize: '1.2rem'}}/>
                            <Typography variant="body2">
                                1300 55 88 94
                            </Typography>
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center', mb: 1}}>
                            <AccessTimeIcon sx={{mr: 1, fontSize: '1.2rem'}}/>
                            <Typography variant="body2">
                                Mon to Fri: 8am - 4pm
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{mt: 2, paddingLeft: {xs: 2, sm: 0}}}>
                        <Link href="https://www.facebook.com/profile.php?id=61556266919870"
                              color="inherit"
                              sx={{mr: 1}}
                              target="_blank"
                              rel="noopener noreferrer"
                        >
                            <Facebook/>
                        </Link>
                        <Link href="https://www.instagram.com/shadelightblinds/"
                              color="inherit"
                              target="_blank"
                              rel="noopener noreferrer"
                        >
                            <Instagram/>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{textAlign: 'center', mt: 4}}>
                <Typography variant="body2">
                    &copy; {new Date().getFullYear()} Shadelight. All Rights Reserved.
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;