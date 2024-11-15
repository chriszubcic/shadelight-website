import React, {useState} from 'react';
import {SwipeableDrawer, Box, Typography, IconButton} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CloseIcon from '@mui/icons-material/Close';
import {Colours} from '../styling/colours.tsx';
import OrderSummaryContent from "./OrderSummaryContent.tsx";
import {BlindOrderSummaryDrawerProps, CurtainOrderSummaryDrawerProps} from './OrderSummaryContent.tsx';

type SwipeableOrderSummaryDrawerProps = BlindOrderSummaryDrawerProps | CurtainOrderSummaryDrawerProps;

const SwipeableOrderSummaryDrawer = (props: SwipeableOrderSummaryDrawerProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => setIsOpen(!isOpen);

    // Handle clicks on the summary bar
    const handleSummaryClick = () => {
        if (!isOpen) {
            setIsOpen(true);
        }
    };

    return (
        <Box
            onClick={handleSummaryClick}
            sx={{
                position: 'sticky',
                bottom: 0,
                height: '70px',
                backgroundColor: Colours.white,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 16px',
                boxShadow: '0px -2px 4px rgba(0, 0, 0, 0.1)',
                zIndex: 1200,
                cursor: 'pointer',
            }}
        >
            <Box sx={{display: 'flex', flexDirection: 'column', paddingBottom: '12px'}}>
                <Box sx={{paddingTop: '8px', marginBottom: '-9px'}}>
                    <Typography variant="overline" color={Colours.sl_textSecondary}>
                        <b>Total Price</b>
                    </Typography>
                </Box>
                <Typography variant="h5" color={Colours.sl_secondary}>
                    ${props.totalPrice}
                </Typography>
            </Box>
            <IconButton
                onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(true);
                }}
                sx={{backgroundColor: Colours.white}}
            >
                <KeyboardArrowUpIcon/>
            </IconButton>

            <SwipeableDrawer
                anchor="bottom"
                open={isOpen}
                onClose={toggleDrawer}
                onOpen={() => setIsOpen(true)}
                swipeAreaWidth={56}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
                PaperProps={{
                    sx: {
                        height: '80vh',
                        overflow: 'auto',
                        borderTopLeftRadius: '16px',
                        borderTopRightRadius: '16px',
                    },
                    onClick: (e: React.MouseEvent) => e.stopPropagation(), // Prevent clicks inside drawer from closing it
                }}
            >
                <IconButton
                    onClick={() => setIsOpen(false)} // Explicitly close drawer
                    sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        zIndex: 1300,
                        backgroundColor: Colours.white,
                        '&:hover': {color: Colours.sl_secondary},
                    }}
                >
                    <CloseIcon/>
                </IconButton>

                <OrderSummaryContent {...props} />
            </SwipeableDrawer>
        </Box>
    );
};

export default SwipeableOrderSummaryDrawer;