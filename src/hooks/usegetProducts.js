import { useState, useEffect } from "react"

const useGetProducts = (API) => {
    const[products, setProducts]=useState([])
    const getProducts=()=>{
        fetch(API)
            .then(response=>response.json())
            .then(data=>setProducts(data))
    }

    useEffect(()=>{
        getProducts()
    },[])
    
    return {products};
}
 
export default useGetProducts;

