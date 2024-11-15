import Card from "@mui/material/Card";
import {Button, Typography} from "@mui/material";

interface AddCustomMeasurementCardProps {
    onAdd: () => void;
}

function AddCustomMeasurementCard({onAdd}: AddCustomMeasurementCardProps) {
    return (
        <Card>
            <Button
                disableRipple
                onClick={onAdd}
                sx={{
                    width: "100%",
                    textTransform: 'none', // Preserve the case of text
                    fontSize: 'inherit', // Inherit font size from Typography
                    fontWeight: 'inherit', // Inherit font weight from Typography
                    color: 'inherit', // Inherit color from Typography
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="overline" sx={{fontSize: '1rem', margin: 0}}>
                    Add a roller blind
                </Typography>
            </Button>

        </Card>
    );
}

export default AddCustomMeasurementCard;