import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {ThemeProvider, createTheme} from '@mui/material/styles';
import App from './App.tsx'
import './index.css'
import {Colours} from "./components/styling/colours.tsx";

const theme = createTheme({
    palette: {
        primary: {
            main: Colours.sl_black, // Custom primary color
        },
        secondary: {
            main: Colours.sl_secondary, // Custom secondary color
        },
    },
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </StrictMode>
    ,
)
