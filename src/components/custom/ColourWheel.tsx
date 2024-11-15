import {Box, Typography} from '@mui/material';
import {PieChart, PieItemIdentifier} from '@mui/x-charts';
import CustomColourCard from './CustomColourCard.tsx';
import {Colours} from "../styling/colours.tsx";

// Define the shape of each segment object
export interface ColourWheelProps {
    id: number;
    color: string;
    name: string;
    value: number;
}

export interface ColourWheelStateProps {
    selectedColor: ColourWheelProps | null;
    onSelectColor: (color: ColourWheelProps) => void;
    colourData: ColourWheelProps[];
    isSmall: boolean
}

function ColourWheel({selectedColor, onSelectColor, colourData, isSmall}: ColourWheelStateProps) {

    // State to track the selected segment
    const handlePieSegmentClick = (event: PieItemIdentifier) => {
        const segmentIndex = event.dataIndex;
        const segment = colourData.find(seg => seg.id === segmentIndex);
        if (segment) {
            onSelectColor(segment);
        }
    };

    const getContrastTextColor = (backgroundColor: string): string => {
        const rgb = parseInt(backgroundColor.replace('#', ''), 16);
        const r = (rgb >> 16) & 0xff;
        const g = (rgb >> 8) & 0xff;
        const b = (rgb >> 0) & 0xff;
        const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        return brightness < 128 ? Colours.white : Colours.sl_black; // Return white for dark backgrounds, black for light backgrounds
    };

    const calculateDimensions = () => {
        if (isSmall) {
            // For small screens, use viewport width to calculate size
            const vw = Math.min(window.innerWidth, window.innerHeight);
            const chartSize = Math.min(400, vw * 0.9); // 90% of viewport width, max 400px
            const innerRadius = chartSize * 0.3; // 30% of chart size
            const outerRadius = chartSize * 0.5; // 50% of chart size
            const innerCircleSize = chartSize * 0.575; // 57.5% of chart size (230/400 ratio from original)

            return {
                chartSize,
                innerRadius,
                outerRadius,
                innerCircleSize
            };
        }

        // Default sizes for larger screens
        return {
            chartSize: 400,
            innerRadius: 120,
            outerRadius: 200,
            innerCircleSize: 230
        };
    };

    const dims = calculateDimensions();

    const pieContainerStyle = {
        width: isSmall ? `${dims.chartSize}px` : '100%',
        height: isSmall ? `${dims.chartSize}px` : '100%',
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2,
                width: '100%',
                height: '100%',
                boxSizing: 'border-box',
            }}
        >
            <Box
                {...pieContainerStyle}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative'
                }}
            >
                <PieChart
                    colors={colourData.map(segment => segment.color)}
                    series={[
                        {
                            data: colourData.map((d) => ({label: d.name, id: d.id, value: d.value})),
                            valueFormatter: () => {
                                return ``;
                            },
                            innerRadius: dims.innerRadius,
                            outerRadius: dims.outerRadius,
                            paddingAngle: 0,
                            cornerRadius: 0,
                            startAngle: 0,
                            endAngle: 360,
                            highlightScope: {fade: 'global', highlight: 'item'},
                            faded: {innerRadius: dims.innerRadius, additionalRadius: -10},
                        },
                    ]}
                    tooltip={{trigger: 'item'}}
                    width={dims.chartSize}
                    height={dims.chartSize}
                    slotProps={{
                        legend: {hidden: true},
                    }}
                    margin={{right: 5}}
                    onItemClick={(_event, d) => handlePieSegmentClick(d)}
                />
                {isSmall ?
                    // Inner circle
                    <Box
                        sx={{
                            position: 'absolute',
                            width: dims.innerCircleSize,
                            height: dims.innerCircleSize,
                            borderRadius: '50%',
                            backgroundColor: `${selectedColor?.color || Colours.sl_white}`,
                            border: `3px solid ${selectedColor?.color ? Colours.sl_secondary : Colours.sl_white}`,
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            style={{
                                color: getContrastTextColor(selectedColor?.color || Colours.sl_white),
                                textAlign: 'center',
                                fontSize: `${dims.chartSize * 0.04}px`, // Responsive font size
                            }}
                            variant="h6"
                        >
                            {selectedColor ? selectedColor.name : ''}
                        </Typography>
                    </Box>
                    :
                    <Box
                        sx={{
                            flex: '1 1 40%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <CustomColourCard
                            id={selectedColor?.color || ""}
                            colour={selectedColor?.name || ""}
                        />
                    </Box>
                }
            </Box>
        </Box>
    );
}

export default ColourWheel;