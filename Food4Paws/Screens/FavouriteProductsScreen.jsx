import { View, Text, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useCartContext } from '../context/cartContext'
import { useFilterContext } from '../context/FilterContext'
import { products } from '../components/product'
import FavProductCard from '../components/FavProductCard'

const FavouriteProductsScreen = () => {
    const {filter_products } = useFilterContext()
    const {favProduct} = useCartContext()
    const [filteredFavorites, setFilteredFavorites] = useState(filter_products.filter(product => favProduct.includes(product._id)));
  
    const removeFav =(Pid)=>{
      const newFavorites = filteredFavorites.filter(curItem => curItem._id !== Pid);
      setFilteredFavorites(newFavorites); 
    }

    
  return (
  <>
  <Navbar/>
  <FlatList className='p-1' data={filteredFavorites} renderItem={({item})=>{
   return (
    <FavProductCard {...item} removeFav={removeFav}/>
   )
  }}/>
  </>
  )
}

export default FavouriteProductsScreen