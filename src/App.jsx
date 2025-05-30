import { useState, useEffect } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "./providers/ThemeProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Works from "./components/Works";
import Connect from "./components/Connect";
import About from "./components/About";
import CustomScrollBar from "./components/CustomScrollBar";
import CustomLoader from "./components/CustomLoader";
import GalaxyGridDetails from "./pages/GalaxyGridDetails";
import FrothDetails from "./pages/FrothDetails";
import IndigoDetails from "./pages/IndigoDetails";
import PortfolioDetails from "./pages/PortfolioDetails";
import AiSaDetails from "./pages/AiSaDetails";
import Favicon from "react-favicon";
import ClipprDetails from "./pages/ClipprDetails";
import ReframeDetails from "./pages/ReframeDetails";
import NotFound from "./pages/NotFound";
import AllWorks from "./pages/AllWorks";
import faviconUrl from "./assets/favicon.ico";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.onload = () => {
      setIsLoading(false);
    };

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <ThemeProvider>
      <NextUIProvider>
        <Router>
          <div className="relative overflow-hidden">
            {isLoading && <CustomLoader />}
            <Favicon url={faviconUrl} />
            <CustomScrollBar>
              <div className="min-h-screen flex flex-col bg-white dark:bg-darkBackground">
                <main>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/works" element={<Works />} />
                    <Route path="/connect" element={<Connect />} />
                    <Route
                      path="/projects/froth-matcha"
                      element={<FrothDetails />}
                    />
                    <Route
                      path="/projects/indigo"
                      element={<IndigoDetails />}
                    />
                    <Route
                      path="/projects/portfolio"
                      element={<PortfolioDetails />}
                    />
                    <Route
                      path="/projects/galaxy-grid-2"
                      element={<GalaxyGridDetails />}
                    />
                    <Route
                      path="/projects/aisafeguard"
                      element={<AiSaDetails />}
                    />
                    <Route
                      path="/projects/clippr"
                      element={<ClipprDetails />}
                    />
                    <Route
                      path="/projects/reframe"
                      element={<ReframeDetails />}
                    />
                    <Route path="/pages/all-works" element={<AllWorks />} />
                    <Route path="*" element={<NotFound />} />
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
