import { useState } from "react";

const initialVAlue={
    cart:[],
}

const useInitialState=()=>{
    const[state, setState]=useState(initialVAlue)
    
    const addToCart=(payload)=>{
        setState({
            ...state,
            cart:[...state.cart, payload]
        })

    }

    const deleteToCart=(payload)=>{
        setState({
            ...state,
            cart:state.cart.filter(item=>item.id !== payload.id)
        })

    }
    
    return {state,addToCart, deleteToCart}
}

export default useInitialState