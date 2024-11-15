import {useState, useEffect} from 'react';
import {Box} from "@mui/material";
import CustomMeasurementsCard from './CustomMeasurementsCard';
import AddCustomMeasurementCard from './AddCustomMeasurementCard';
import {CustomFabricProps} from "./CustomFabricCard.tsx";

export interface MeasurementCard {
    id: number;
    title: string;
    width: string;
    drop: string;
    selectedSide: 'Left' | 'Right' | '';
    validMeasurement: boolean;
}

interface CustomMeasurementsProps {
    fabricType: CustomFabricProps | null;
    onMeasurementsChange: (measurements: MeasurementCard[]) => void;
}

function CustomMeasurements({fabricType, onMeasurementsChange}: CustomMeasurementsProps) {
    const [cards, setCards] = useState<MeasurementCard[]>([]);

    useEffect(() => {
        // Initialize with Roller Blind 1
        const initialCard: MeasurementCard = {
            id: Date.now(),
            title: 'Furnishing 1',
            width: '',
            drop: '',
            selectedSide: 'Left',
            validMeasurement: false
        };
        setCards([initialCard]);
        onMeasurementsChange([initialCard]);
    }, []);

    const getNextNumber = () => {
        const highestNumber = Math.max(...cards.map(card => {
            const match = card.title.match(/Furnishing (\d+)/);
            return match ? parseInt(match[1], 10) : 0;
        }), 0);
        return highestNumber + 1;
    };

    const addCard = () => {
        const newNumber = getNextNumber();
        const newTitle = `Furnishing ${newNumber}`;
        const newCard: MeasurementCard = {
            id: Date.now(),
            title: newTitle,
            width: '',
            drop: '',
            selectedSide: 'Left',
            validMeasurement: false
        };
        const newCards = [...cards, newCard];
        setCards(newCards);
        onMeasurementsChange(newCards);
    };

    const removeCard = (id: number) => {
        if (cards.length > 1) {
            const newCards = cards.filter(card => card.id !== id);
            setCards(newCards);
            onMeasurementsChange(newCards);
        }
    };

    const updateCard = (id: number, field: keyof MeasurementCard, value: string | 'Left' | 'Right' | boolean) => {
        const newCards = cards.map(card =>
            card.id === id ? {...card, [field]: value} : card
        );
        setCards(newCards);
        onMeasurementsChange(newCards);
    };

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 1, width: '100%'}}>
            {cards.map((card, index) => (
                <CustomMeasurementsCard
                    key={card.id}
                    index={index + 1}
                    onRemove={() => removeCard(card.id)}
                    title={card.title}
                    width={card.width}
                    drop={card.drop}
                    selectedSide={card.selectedSide}
                    onWidthChange={(value) => updateCard(card.id, 'width', value)}
                    onDropChange={(value) => updateCard(card.id, 'drop', value)}
                    onSideChange={(side) => updateCard(card.id, 'selectedSide', side)}
                    onValidMeasurementChange={(isValid) => updateCard(card.id, 'validMeasurement', isValid)}
                    fabricType={fabricType}
                />
            ))}
            <AddCustomMeasurementCard onAdd={addCard}/>
        </Box>
    );
}

export default CustomMeasurements;
