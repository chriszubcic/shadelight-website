import './App.css'
import HeaderBar from "./components/navigation/HeaderBar.tsx";
import {HashRouter, Route, Routes, useLocation} from 'react-router-dom';
import CustomOrderScreen from "./components/screens/CustomOrderScreen.tsx";
import HomeScreen from "./components/screens/HomeScreen.tsx";
import Footer from "./components/navigation/Footer.tsx";
import {useEffect} from "react";
import {Box} from "@mui/material";
import BlindsScreen from "./components/screens/BlindsScreen.tsx";
import CurtainsScreen from "./components/screens/CurtainsScreen.tsx";
import ShuttersScreen from "./components/screens/ShuttersScreen.tsx";
import MotorisationScreen from "./components/screens/MotorisationScreen.tsx";
import ExternalsScreen from "./components/screens/ExternalsScreen.tsx";

const ScrollToTop = () => {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Reset scroll position to the top
    }, [pathname]); // Trigger this effect when the pathname changes

    return null; // This component does not render anything
};

function App() {
    return (
        <HashRouter basename="/shadelight-website">
                <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
                    <ScrollToTop/>
                    <HeaderBar/>
                    <Box sx={{flex: '1 1 auto', display: 'flex', flexDirection: 'column'}}>
                        <Routes>
                            <Route path="/" element={<HomeScreen/>}/>
                            <Route path="/design" element={<CustomOrderScreen/>}/>
                            <Route path="/blinds" element={<BlindsScreen/>}/>
                            <Route path="/curtains" element={<CurtainsScreen/>}/>
                            <Route path="/shutters" element={<ShuttersScreen/>}/>
                            <Route path="/externals" element={<ExternalsScreen/>}/>
                            <Route path="/motorisation" element={<MotorisationScreen/>}/>
                            {/*<Route path="/contact" element={<CurtainsScreen/>}/>*/}
                        </Routes>
                    </Box>
                    <Footer/>
                </Box>
            {/*</Router>*/}
        </HashRouter>
    )
}

export default App
