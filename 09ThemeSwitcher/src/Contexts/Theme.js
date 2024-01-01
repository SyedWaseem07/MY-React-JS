import { createContext, useContext} from 'react'

export const ThemeContext = createContext({
    theme: 'light',
    lightTheme: () => {},
    darkTheme: () => {}
});

export const ThemeContextProvider = ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext);
}



















// import React, { createContext, useContext } from 'react'

// export const ThemeContext = React.createContext({
//     themeMode: "light",
//     darkTheme : () => {},
//     lightTheme : () => {}
// })

// export const ThemeContextProvider = ThemeContext.Provider

// export default function useTheme() {
//     return useContext(ThemeContext);
// }