import CustomFurnishingType, {CustomFurnishingTypeProps} from "../custom/CustomFurnishingType.tsx";
import {Box} from "@mui/material";
import CustomContainerHeading from "../custom/CustomContainerHeading.tsx";
import {Blinds} from "../data/blinds.tsx";
import {Curtains} from "../data/curtains.tsx";
import React, {useEffect, useState} from "react";
import {DualBlinds} from "../data/dualBlinds.tsx";
import DualRadioSelect from "../custom/DualRadioSelect.tsx";

interface FurnishingTypeContainerProps {
    title: string;
    selectedFurnishingType: CustomFurnishingTypeProps | null;
    onSelect: (furnishingType: CustomFurnishingTypeProps) => void;
    onDualChange: (isDual: boolean) => void;
}

function FurnishingTypeContainer({
                                     title,
                                     selectedFurnishingType,
                                     onSelect,
                                     onDualChange
                                 }: FurnishingTypeContainerProps) {
    const [radioValue, setRadioValue] = useState("single");
    const [furnishingTypes, setFurnishingTypes] = useState<CustomFurnishingTypeProps[]>([]);
    const [isRollerBlind, setIsRollerBlind] = useState(false);

    // Update furnishingTypes based on title and radio selection
    useEffect(() => {
        let types: CustomFurnishingTypeProps[] = [];
        if (title === "Roller Blinds") {
            setIsRollerBlind(true)
            types = radioValue === "dual" ? DualBlinds.types : Blinds.types;
        } else if (title === "Curtains") {
            types = Curtains.types;
        }
        setFurnishingTypes(types);
    }, [radioValue, title]);

    // Select the first furnishing type when the list of furnishing types changes
    useEffect(() => {
        if (furnishingTypes.length > 0 && (selectedFurnishingType === null || !furnishingTypes.some(type => type.id === selectedFurnishingType.id))) {
            onSelect(furnishingTypes[0]);
        }
    }, [furnishingTypes, selectedFurnishingType, onSelect]);

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const radioValue = event.target.value;
        setRadioValue(radioValue);
        onDualChange(radioValue === 'dual');
    };

    return (
        <Box>
            <CustomContainerHeading heading_no={"1"} title={title}/>
            {isRollerBlind ?
                <Box mt={-2}>
                    <DualRadioSelect value={radioValue} onChange={handleRadioChange}/>
                </Box> : null
            }
            <Box
                sx={{
                    display: "flex",
                    gap: 3,
                    flexWrap: "nowrap",
                    justifyContent: "flex-start",
                    overflowX: "auto",
                    width: "100%",
                }}
            >
                {furnishingTypes.map((furnishingType) => (
                    <Box
                        key={furnishingType.id} // Use id from furnishingType
                    >
                        <CustomFurnishingType
                            {...furnishingType}
                            isSelected={selectedFurnishingType?.id === furnishingType.id}
                            onSelect={() => onSelect(furnishingType)}
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default FurnishingTypeContainer;