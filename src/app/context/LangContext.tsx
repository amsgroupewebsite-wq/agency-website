'use client';

import React,{ useState ,createContext ,useContext } from "react";
import { LangContextType } from "../type/type";

const LangContext = createContext<LangContextType|undefined> (undefined);

export function LangProvider({children, defaultLang='fr'}:{
    children:React.ReactNode ; 
    defaultLang?:string;
}){
    const [lang, setLang] = useState(defaultLang);

    return(
        <LangContext.Provider value={{ lang, setlang: setLang }}>
            {children}
        </LangContext.Provider>
    )
   
}

export function useLang()
{
    const context=useContext(LangContext);
    if(context===undefined)
    {
        throw new Error('use Lang must be used within a LangProvider')
    }
    return context;
}