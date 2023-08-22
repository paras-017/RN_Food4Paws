import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useCartContext } from '../context/cartContext'
import { useFilterContext } from '../context/FilterContext'
import { products } from '../components/product'
import FavProductCard from '../components/FavProductCard'
import EmptyCart from '../components/EmptyCart'

const FavouriteProductsScreen = () => {
    const {filter_products } = useFilterContext()
    const {favProduct} = useCartContext()
    const [filteredFavorites, setFilteredFavorites] = useState(filter_products.filter(product => favProduct.includes(product._id)));

   
    const removeFav =(Pid)=>{
      const newFavorites = filteredFavorites.filter(curItem => curItem._id !== Pid);
      setFilteredFavorites(newFavorites); 
    }

    
    if(filteredFavorites.length===0){
      return (
        <EmptyCart imageType={require('../assets/emptyWishList.png')} text1={'YOUR WISHLIST IS EMPTY'} text2={'Add items that you like to your wishlist. Review them anytime and easily move them to the bag.'}/>
      )
    }
 
     
    
  return (
  <>
  <Navbar filteredFavorites={filteredFavorites}/>
  <FlatList className='p-1' data={filteredFavorites} renderItem={({item})=>{
   return (
    <FavProductCard {...item} removeFav={removeFav}/>
   )
  }}/>
  </>
  )
}

export default FavouriteProductsScreen