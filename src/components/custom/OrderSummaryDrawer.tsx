import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import OrderSummaryContent, {OrderSummaryProps} from './OrderSummaryContent';
import {Colours} from "../styling/colours.tsx";

const drawerWidth = '26vw';

const OrderSummaryBox = (props: OrderSummaryProps) => {
    return (
        <Box
            sx={{
                width: drawerWidth,
                position: 'sticky',
                top: 0,
                right: 0,
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                background: Colours.white,
                boxShadow: 1,
                zIndex: 1,
                alignSelf: 'flex-end',
                marginBottom: 'auto',
            }}
        >
            <Toolbar/>
            <OrderSummaryContent {...props} />
        </Box>
    );
};

export default OrderSummaryBox;