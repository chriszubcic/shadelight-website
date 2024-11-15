import AppBar from '@mui/material/AppBar';
import {Link, useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import {Drawer, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {Colours} from "../styling/colours.tsx";
import './HeaderBar.css'; // Import the CSS file

export default function HeaderBar() {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{width: 375, height: '100%', display: 'flex', flexDirection: 'column'}} role="presentation"
             onClick={toggleDrawer(false)}>
            <Box
                sx={{
                    height: '30px', // Matches the header height
                    marginLeft: 2,
                    marginTop: 3,
                    marginBottom: 1.1,
                    objectFit: 'contain',
                    alignSelf: 'flex-start'
                }}
            />
            <List sx={{ marginLeft: '14px' }}>
                {[
                    { text: 'Home', route: '/' },
                    { text: 'Blinds', route: '/blinds' },
                    { text: 'Curtains', route: '/curtains' },
                    { text: 'Shutters', route: '/shutters' },
                    { text: 'Externals', route: '/externals' },
                    { text: 'Motorisation', route: '/motorisation' },
                    { text: 'Contact Us', route: '/contact' }
                ].map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton component={Link} to={item.route} className="list-item-button">
                            <Box className="list-item-text-container">
                                <ListItemText primary={item.text}/>
                            </Box>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="fixed" sx={{height: 75, zIndex: (theme) => theme.zIndex.drawer + 1}}>
                <Toolbar sx={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                        onClick={toggleDrawer(!open)}
                    >
                        <MenuIcon sx={{fontSize: 40}}/>
                    </IconButton>
                    <Drawer
                        PaperProps={{
                            sx: {
                                backgroundColor: Colours.sl_black,
                                color: Colours.white,
                            }
                        }}
                        open={open} onClose={toggleDrawer(false)}>
                        {DrawerList}
                    </Drawer>
                    <Box sx={{flexGrow: 1}}/>
                    <Box component="img" src="shadelightlogowhite.png" alt="Logo"
                         sx={{height: 30, display: 'flex', justifyContent: 'flex-end', cursor: 'pointer'}}
                         onClick={() => navigate('/')}
                    />
                </Toolbar>
            </AppBar>
        </Box>
    );
}
