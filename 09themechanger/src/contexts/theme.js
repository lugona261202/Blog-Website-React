import { createContext,useContext } from "react";

export const themeContext = createContext({
    themeMode:"light",
    darkTheme: ()=>{},
    lightTheme: ()=>{}
})

export const ThemeProvider = themeContext.Provider

export default function useTheme(){
    return useContext(themeContext)
}
// in context project
// use context and usercontext both had to be imported
// but here we export use context and pass theme context method as its parameter
// thus now we can use usercontext/ themeContext directly without importing the hook