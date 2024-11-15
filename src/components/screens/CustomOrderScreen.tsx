import OrderSummaryDrawer from "../custom/OrderSummaryDrawer.tsx";
import Box from "@mui/material/Box";
import FurnishingTypeContainer from "../containers/FurnishingTypeContainer.tsx";
import FabricsAndColourContainer from "../containers/FabricsAndColourContainer.tsx";
import MeasurementsContainer from "../containers/MeasurementsContainer.tsx";
import DriveControlContainer from "../containers/DriveControlContainer.tsx";
import {useEffect, useState} from "react";
import {CustomFurnishingTypeProps} from "../custom/CustomFurnishingType.tsx";
import {CustomOptionProps} from "../custom/CustomOptionCard.tsx";
import {ColourWheelProps} from "../custom/ColourWheel.tsx";
import {MeasurementCard} from "../custom/CustomMeasurements.tsx";
import SwipeableOrderSummaryDrawer from "../custom/OrderSummarySwipeableDrawer.tsx";
import {CustomFabricProps} from "../custom/CustomFabricCard.tsx";
import Pricing from "../data/pricing.tsx";
import ComponentColourContainer from "../containers/ComponentColourContainer.tsx";
import {useLocation} from "react-router-dom";
import CurtainFinishContainer from "../containers/CurtainFinishContainer.tsx";
import CurtainFittingContainer from "../containers/CurtainFittingContainer.tsx";
import CurtainStyleContainer from "../containers/CurtainStyleContainer.tsx";
import CurtainControlContainer from "../containers/CurtainControlContainer.tsx";
import CurtainTrackColourContainer from "../containers/CurtainTrackColourContainer.tsx";
import {BlindOrderSummaryDrawerProps, CurtainOrderSummaryDrawerProps} from "../custom/OrderSummaryContent.tsx";
import RollDirectionContainer from "../containers/RollDirectionContainer.tsx";

function CustomOrderScreen() {
    const [furnishingType, setFurnishingType] = useState<CustomFurnishingTypeProps | null>(null);
    const [fabricType, setFabricType] = useState<CustomFabricProps | null>(null);
    const [secondaryFabricType, setSecondaryFabricType] = useState<CustomFabricProps | null>(null);
    const [selectedColor, setSelectedColor] = useState<ColourWheelProps | null>(null);
    const [secondarySelectedColor, setSecondarySelectedColor] = useState<ColourWheelProps | null>(null);
    const [measurements, setMeasurements] = useState<MeasurementCard[]>([]);
    const [rollDirection, setRollDirection] = useState<CustomOptionProps | null>(null);
    const [driveControl, setDriveControl] = useState<CustomOptionProps | null>(null);
    const [isNarrowScreen, setIsNarrowScreen] = useState(false);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [componentColour, setComponentColour] = useState<CustomOptionProps | null>(null);
    const [selectedFinish, setSelectedFinish] = useState<CustomOptionProps | null>(null);
    const [selectedFitting, setSelectedFitting] = useState<CustomOptionProps | null>(null);
    const [selectedCurtainStyle, setSelectedCurtainStyle] = useState<CustomOptionProps | null>(null);
    const [selectedCurtainControl, setSelectedCurtainControl] = useState<CustomOptionProps | null>(null);
    const [selectedTrackColour, setSelectedTrackColour] = useState<CustomOptionProps | null>(null);
    const [isDual, setIsDual] = useState(false);
    const location = useLocation();
    const {furnishing} = location.state || {};

    function handleChangeFurnishingType(newFurnishingType: CustomFurnishingTypeProps) {
        setFurnishingType(newFurnishingType);
        setFabricType(null);
        setSecondaryFabricType(null);
        setSelectedColor(null);
        setSecondarySelectedColor(null);
    }

    useEffect(() => {
        const handleResize = () => {
            setIsNarrowScreen(window.innerWidth < 960);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        calculatePrice();
    }, [measurements, fabricType, secondaryFabricType, driveControl]);

    function calculatePrice() {
        let calc_price = 0;
        for (const measurement of measurements) {
            if (measurement.width && measurement.drop && fabricType) {
                calc_price += Pricing.getPrice(parseFloat(measurement.width), parseFloat(measurement.drop), fabricType.priceGroup);

                // Add price for secondary fabric if it exists
                if (isDual && secondaryFabricType) {
                    calc_price += Pricing.getPrice(parseFloat(measurement.width), parseFloat(measurement.drop), secondaryFabricType.priceGroup);
                }
            }
        }
        if (driveControl?.price) {
            calc_price += driveControl.price;
        }
        setTotalPrice(calc_price);
    }

    let summaryProps: BlindOrderSummaryDrawerProps | CurtainOrderSummaryDrawerProps = {} as BlindOrderSummaryDrawerProps | CurtainOrderSummaryDrawerProps;
    if (furnishing == "Roller Blinds") {
        summaryProps = {
            type: 'blind',
            furnishingType,
            fabric: fabricType,
            colour: selectedColor,
            secondaryFabric: isDual ? secondaryFabricType : null,
            secondaryColour: isDual ? secondarySelectedColor : null,
            measurements,
            rollDirection,
            driveControl,
            componentColour: componentColour,
            totalPrice
        } as BlindOrderSummaryDrawerProps;
    } else if (furnishing == "Curtains") {
        summaryProps = {
            type: 'curtain',
            furnishingType,
            fabric: fabricType,
            colour: selectedColor,
            measurements,
            selectedFinish,
            selectedFitting,
            selectedCurtainStyle,
            selectedCurtainControl,
            selectedTrackColour,
            totalPrice
        } as CurtainOrderSummaryDrawerProps;
    }

    const renderFurnishingSpecificControls = () => {
        if (furnishing == "Roller Blinds") {
            return (
                <>
                    <RollDirectionContainer
                        selectedRollDirection={rollDirection}
                        onSelect={setRollDirection}
                    />
                    <DriveControlContainer
                        selectedDriveControl={driveControl}
                        onSelect={setDriveControl}
                    />
                    <ComponentColourContainer
                        selectedComponentColour={componentColour}
                        onSelect={setComponentColour}
                    />
                </>
            )
        } else if (furnishing == "Curtains") {
            return (
                <>
                    <CurtainFinishContainer selectedFinish={selectedFinish} onSelect={setSelectedFinish}/>
                    <CurtainFittingContainer selectedFitting={selectedFitting} onSelect={setSelectedFitting}/>
                    <CurtainStyleContainer selectedCurtainStyle={selectedCurtainStyle}
                                           onSelect={setSelectedCurtainStyle}/>
                    <CurtainControlContainer selectedControl={selectedCurtainControl}
                                             onSelect={setSelectedCurtainControl}/>
                    <CurtainTrackColourContainer selectedTrackColour={selectedTrackColour}
                                                 onSelect={setSelectedTrackColour}/>
                </>
            )
        }
    }

    return (
        <Box
            sx={isNarrowScreen
                ? {
                    width: '100%',
                }
                : {
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                }}
        >
            <Box
                marginTop={'125px'}
                width={isNarrowScreen ? '92vw' : '65vw'}
                marginLeft={isNarrowScreen ? '4vw' : `calc((74vw - 65vw) / 2)`}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    gap={10}
                    marginBottom={20}
                >
                    <FurnishingTypeContainer
                        title={furnishing}
                        selectedFurnishingType={furnishingType}
                        onSelect={handleChangeFurnishingType}
                        onDualChange={setIsDual}
                    />
                    <FabricsAndColourContainer
                        selectedFurnishingType={furnishingType}
                        isDual={false}
                        selectedFabricType={fabricType}
                        onSelectFabric={setFabricType}
                        selectedColor={selectedColor}
                        onSelectColor={setSelectedColor}
                        isSmall={isNarrowScreen}
                    />
                    {isDual && (
                        <FabricsAndColourContainer
                            selectedFurnishingType={furnishingType}
                            isDual={true}
                            selectedFabricType={secondaryFabricType}
                            onSelectFabric={setSecondaryFabricType}
                            selectedColor={secondarySelectedColor}
                            onSelectColor={setSecondarySelectedColor}
                            isSmall={isNarrowScreen}
                        />
                    )}
                    <MeasurementsContainer
                        fabricType={fabricType}
                        onMeasurementsChange={setMeasurements}
                    />
                    {renderFurnishingSpecificControls()}
                </Box>
            </Box>

            {isNarrowScreen ? (
                <SwipeableOrderSummaryDrawer {...summaryProps} />
            ) : (
                <OrderSummaryDrawer {...summaryProps} />
            )}
        </Box>
    );
}

export default CustomOrderScreen;