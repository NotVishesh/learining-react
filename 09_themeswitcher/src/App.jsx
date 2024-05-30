import React, { useState,useEffect } from "react";
import ThemeBtn  from "./components/ThemeBtn";
import { ThemeContextProvider } from "./context/theme";
import Card from "./components/Card";

function App() { 
  const [themeMode, setThemeMode] = useState("light")
  const lightTheme = () =>{
    setThemeMode("light")
  }
  const darkTheme = () =>{
    setThemeMode("dark")
  }

  useEffect(() => {
    
    document.querySelector("html").classList.remove("light", "dark")
    document.querySelector("html").classList.add(themeMode)
  }, [themeMode])
  


  return (
    <ThemeContextProvider value={{lightTheme, darkTheme, themeMode}}>
      <div div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto"><Card/></div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;