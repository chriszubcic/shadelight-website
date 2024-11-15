import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import {Colours} from "../styling/colours.tsx";
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import React, {useState} from "react";
import {modalStyle} from "../styling/modal.ts";
import EmailIcon from '@mui/icons-material/Email';
import {Button, Stack, TextField} from "@mui/material";

interface CustomOrderFormModalProps {
    open: boolean;
    onClose: () => void;
}

const CustomOrderFormModal: React.FC<CustomOrderFormModalProps> = ({open, onClose}) => {
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState('');
    const [emailError, setEmailError] = useState<string | null>(null);
    const [phoneError, setPhoneError] = useState<string | null>(null);

    const validateEmail = (value: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value) && value) {
            setEmailError('Invalid email');
        } else {
            setEmailError(null);
        }
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setEmail(value);
        validateEmail(value);
    };

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setPhone(value);

        if (value){
            setPhoneError(null);
        }
    };

    const handleSubmit = () => {
        validateEmail(email);

        if (!emailError && email && phone) {
            // Submit form
            console.log("Form submitted with:", {email, phone});
            onClose();
        }

        if (!email) {
            setEmailError('Email required')
        }

        if (!phone) {
            setPhoneError('Contact number required')
        }
    };

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            closeAfterTransition
            components={{Backdrop: Backdrop}}
        >
            <Fade in={open}>
                <Box
                    sx={{
                        ...modalStyle,
                        width: '85vw',
                        maxWidth: '711px',
                        height: 'auto',
                        maxHeight: '70vh',
                        border: '0',
                        borderRadius: '4px',
                        padding: 0,
                        position: 'relative',
                        outline: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <CloseIcon
                        sx={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            color: Colours.sl_black,
                            fontSize: 20,
                            cursor: 'pointer',
                            borderRadius: '50%',
                            backgroundColor: 'transparent',
                            "&:hover": {
                                color: Colours.sl_secondary
                            },
                        }}
                        onClick={onClose}
                    />
                    <Box
                        sx={{
                            padding: '12px 20px 10px 20px',
                            flex: '1 1 auto',
                        }}
                    >
                        <Typography
                            variant="h4"
                            color={Colours.sl_black}
                            component="div"
                            paddingLeft={1}
                            paddingTop={1}
                        >
                            Confirm Order
                        </Typography>
                        <Typography
                            variant="body1"
                            color={Colours.sl_black}
                            component="div"
                            padding={1}
                        >
                            Input your email and a contact number. Once submitted, you will receive a copy of your order
                            form. A member from Shadelight will contact you to confirm your order.
                        </Typography>

                        <Box padding={1} paddingRight={4} paddingBottom={3} sx={{display: 'flex', alignItems: 'flex-end'}}>
                            <PhoneIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                            <TextField
                                fullWidth
                                id="contact-phone"
                                label="Contact Number"
                                variant="standard"
                                type="tel"
                                value={phone}
                                onChange={handlePhoneChange}
                                helperText={phoneError ? phoneError : null}
                                InputProps={{
                                    style: {
                                        height: '100%', // Ensure input occupies the set height
                                    },
                                }}
                                FormHelperTextProps={{
                                    sx: {
                                        color: Colours.sl_error,
                                        position: 'absolute',
                                        bottom: '-20px', // Position below the input field
                                    },
                                }}
                            />
                        </Box>
                        <Box padding={1} paddingRight={4} sx={{display: 'flex', alignItems: 'flex-end'}}>
                            <EmailIcon sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                            <TextField
                                fullWidth
                                id="contact-email"
                                label="Contact Email"
                                variant="standard"
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                helperText={emailError ? emailError : null}
                                InputProps={{
                                    style: {
                                        height: '100%', // Ensure input occupies the set height
                                    },
                                }}
                                FormHelperTextProps={{
                                    sx: {
                                        color: Colours.sl_error,
                                        position: 'absolute',
                                        bottom: '-20px', // Position below the input field
                                    },
                                }}
                            />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            padding: '16px 20px',
                        }}
                    >
                        <Stack spacing={1} direction="row" justifyContent="flex-end">
                            <Button
                                variant="outlined"
                                sx={{
                                    '&:hover': {
                                        color: Colours.sl_secondary,
                                        borderColor: Colours.sl_secondary,
                                    },
                                }}
                                onClick={onClose}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{
                                    backgroundColor: Colours.sl_secondary,
                                    color: Colours.sl_white,
                                    borderColor: Colours.sl_secondary,
                                    '&:hover': {
                                        backgroundColor: Colours.sl_secondary,
                                        borderColor: Colours.sl_secondary,
                                        opacity: 0.9,
                                    },
                                }}
                                onClick={handleSubmit}
                            >
                                Submit
                            </Button>
                        </Stack>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
};

export default CustomOrderFormModal;