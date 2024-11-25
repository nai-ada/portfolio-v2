import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from './providers/ThemeProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Works from './components/Works';
import Connect from './components/Connect';
import About from './components/About';
import CustomScrollBar from './components/CustomScrollBar'; 
import GalaxyGridDetails from './pages/GalaxyGridDetails';
import FrothDetails from './pages/FrothDetails';
import Favicon from 'react-favicon';



function App() {
  return (
    <ThemeProvider>
      <NextUIProvider>
        <Router>
          <div className="relative overflow-hidden">
          <Favicon url="/src/assets/favicon.ico" />
            <CustomScrollBar>
              <div className="min-h-screen flex flex-col bg-white dark:bg-darkBackground">
                <main>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/works" element={<Works />} />
                    <Route path="/connect" element={<Connect />} />
                    <Route path="/projects/galaxy-grid-2" element={<GalaxyGridDetails />} />
                    <Route path="/projects/froth-matcha" element={<FrothDetails />} />
                  </Routes>
                </main>
              </div>
            </CustomScrollBar>
          </div>
        </Router>
      </NextUIProvider>
    </ThemeProvider>
  );
}

export default App;