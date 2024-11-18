// src/App.jsx
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from './providers/ThemeProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components with the correct paths
import Footer from './components/Footer';
import Home from './pages/Home';
import Works from './components/Works';
import Connect from './components/Connect';
import About from './components/About';
import CustomScrollBar from './components/CustomScrollBar'; // Fix the path

function App() {
  return (
    <ThemeProvider>
      <NextUIProvider>
        <Router>
          <div className="overflow-hidden"> {/* Add overflow-hidden here */}
            <CustomScrollBar>
              <div className="min-h-screen flex flex-col bg-white dark:bg-darkBackground">
                <main>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/works" element={<Works />} />
                    <Route path="/connect" element={<Connect />} />
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