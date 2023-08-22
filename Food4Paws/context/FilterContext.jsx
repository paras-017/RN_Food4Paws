import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from '../reducer/filterReducer'

//----------Creating Context----------
const FilterContext = createContext()
const initialState = {
    filter_products : [],
    all_products:[],
    filters:{
        text:'',
        maxPrice: 0,
        price: 0,
        minPrice: 0,
    }
}


//----------Providing Context----------
export const FilterContextProvider =({children})=>{
    const {products} = useProductContext()
    const [state, dispatch]=useReducer(reducer, initialState)

    useEffect(() => {
       dispatch({type:'FILTER_PRODUCTS'})
    }, [products,state.filters])
    
    useEffect(() => {
        dispatch({type:"LOAD_FILTER_PRODUCTS", payload:products})
        //usign products as dependency array ifnot it will just just send empty product array
    }, [products])
        

    return (
        <FilterContext.Provider value={{...state}}>
           {children}
        </FilterContext.Provider>
    )

}

//----------Using Context----------
export const useFilterContext =()=>{
    return useContext(FilterContext)
}