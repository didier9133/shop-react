import React, { createContext} from 'react';
import useInitialState from '../hooks/useInitialState';
const AppContext=createContext()

function AppProvider({children}){
    const {addToCart, state, deleteToCart}=useInitialState()
    return(
        <AppContext.Provider value={{addToCart,state,deleteToCart}}>
            {children}
        </AppContext.Provider>
    )
}

export  {AppContext, AppProvider}