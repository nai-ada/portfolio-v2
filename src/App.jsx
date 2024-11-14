import React from 'react';
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import AppRouter from './AppRouter';

function App() {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light">
      <NextUIProvider>
        <div className="App">
          <AppRouter />
        </div>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default App;