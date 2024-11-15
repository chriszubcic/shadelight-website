import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import {Colours} from "../styling/colours.tsx";
import {Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {modalStyle} from "../styling/modal.ts";

// TODO - import images

interface CustomFabricModalProps {
    image: string;
    title: string;
    open: boolean;
    onClose: () => void;
}

function createData(key: string, value: string) {
    return {key, value};
}

const rows = [
    createData('Composition', '100% polyester'),
    createData('Width', '2,000mm & 3,000mm'),
    createData('Weight', '290gsm'),
    createData('Thickness', '0.29mm'),
    createData('Light fastness', '> 5 (blue wood scale)'),
    createData('Coating', 'Acrylic foam')
];

// TODO - add description back

const CustomFabricModal: React.FC<CustomFabricModalProps> = ({title, image, open, onClose}) => {
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={onClose}
            closeAfterTransition
            components={{Backdrop: Backdrop}}
        >
            <Fade in={open}>
                <Box
                    sx={{
                        ...modalStyle,
                        width: '350px',
                        height: '500px',
                        border: '0',
                        borderRadius: '4px',
                        overflow: 'hidden',
                        padding: 0,
                        position: 'relative',
                        outline:'none'
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
                        component="img"
                        src={image}
                        sx={{
                            width: '100%',
                            height: '200px',
                            objectFit: 'cover',
                        }}
                    />
                    <Box
                        sx={{
                            paddingLeft: '10px',
                            paddingRight: '10px',
                            maxHeight: 'calc(100% - 200px)',
                            overflowY: 'auto',
                        }}
                    >
                        <Typography
                            variant="h6"
                            color={Colours.sl_black}
                            component="div"
                            sx={{textAlign: 'center'}}
                            padding={1}
                        >
                            {title}
                        </Typography>
                        <TableContainer>
                            <Table sx={{width: '100%'}} size={'small'}>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.key}
                                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                        >
                                            <TableCell
                                                component="th"
                                                scope="row"
                                                align="right"
                                                sx={{color: Colours.sl_black}}
                                            >
                                                {row.key}
                                            </TableCell>
                                            <TableCell
                                                align="left"
                                                sx={{color: Colours.sl_textSecondary}}
                                            >
                                                {row.value}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
};

export default CustomFabricModal;
