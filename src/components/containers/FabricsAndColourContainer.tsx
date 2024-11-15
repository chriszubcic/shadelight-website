import {Box} from "@mui/material";
import CustomContainerHeading from "../custom/CustomContainerHeading.tsx";
import CustomFabricCard, {CustomFabricProps} from "../custom/CustomFabricCard.tsx";
import ColourWheel, {ColourWheelProps} from "../custom/ColourWheel.tsx";
import {CustomDualFurnishingTypeStateProps, CustomFurnishingTypeProps} from "../custom/CustomFurnishingType.tsx";
import CustomContainerSubheading from "../custom/CustomContainerSubheading.tsx";

interface FabricsAndColourContainerProps {
    selectedFurnishingType: CustomDualFurnishingTypeStateProps | CustomFurnishingTypeProps | null;
    selectedFabricType: CustomFabricProps | null;
    onSelectFabric: (fabricType: CustomFabricProps) => void;
    selectedColor: ColourWheelProps | null;
    onSelectColor: (color: ColourWheelProps | null) => void;
    isSmall: boolean;
    isDual: boolean;
}

function FabricsAndColourContainer({
                                       selectedFurnishingType,
                                       selectedFabricType,
                                       onSelectFabric,
                                       selectedColor,
                                       onSelectColor,
                                       isSmall,
                                       isDual,
                                   }: FabricsAndColourContainerProps) {
    const heading_no = '2';
    const heading = 'Fabric and Colour';

    let fabricTypes: CustomFabricProps[];
    if (isDual) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        fabricTypes = selectedFurnishingType?.fabrics_secondary || [];
    } else {
        fabricTypes = selectedFurnishingType?.fabrics || [];
    }

    function onChangeFabric(fabricType: CustomFabricProps) {
        onSelectFabric(fabricType);
        onSelectColor(null);
    }

    return (
        <Box>
            {isDual ?
                <CustomContainerSubheading title={`${selectedFurnishingType?.title.split('&')[1]} fabric and colour`}/>
                :
                <>
                    <CustomContainerHeading heading_no={heading_no} title={heading}/>
                    <CustomContainerSubheading
                        title={`${selectedFurnishingType?.title.split('&')[0].trim()} fabric and colour`}/>
                </>
            }
            <Box
                sx={{
                    display: 'grid',
                    gap: 2, // 16px gap
                    gridTemplateColumns: {
                        // On mobile: 2 columns, each taking (50% - 8px) of space
                        xs: 'repeat(2, minmax(0, 1fr))',
                        // On tablet/desktop: 3 columns, each taking (33.33% - 10.67px) of space
                        sm: 'repeat(auto-fill, minmax(200px, 1fr))'
                    },
                    width: '100%',
                }}
            >
                {fabricTypes.map((fabricType) => (
                    <Box
                        sx={{
                            minWidth: '140px',
                            maxWidth: '100%',
                        }}
                    >
                        <CustomFabricCard
                            id={fabricType.id}
                            image={fabricType.image}
                            price={fabricType.price}
                            title={fabricType.title}
                            description={fabricType.description}
                            colours={fabricType.colours}
                            minPrice={fabricType.minPrice}
                            widthLimits={fabricType.widthLimits}
                            heightLimits={fabricType.heightLimits}
                            isSelected={selectedFabricType?.id === fabricType.id}
                            onSelect={onChangeFabric}
                            priceGroup={fabricType.priceGroup}
                        />
                    </Box>
                ))}
            </Box>
            {selectedFabricType &&
                <Box sx={{paddingTop: 10}}>
                    <ColourWheel
                        selectedColor={selectedColor}
                        onSelectColor={onSelectColor}
                        colourData={selectedFabricType?.colours}
                        isSmall={isSmall}
                    />
                </Box>
            }
        </Box>
    );
}

export default FabricsAndColourContainer;