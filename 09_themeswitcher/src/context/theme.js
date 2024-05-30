import {createContext, useContext} from 'react'

export const ThemeContext = createContext ({
    themeMode : "Light",
    darkTheme : ()=>{

    },
    lightTheme : ()=>{

    }
})

export const ThemeContextProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}