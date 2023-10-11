import { View, Text, TouchableOpacity, FlatList, StyleSheet, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { useFilterContext } from '../context/FilterContext';

const ProductScreen = () => {
 const {filter_products } = useFilterContext()
 const [searchText, setSearchText] = useState('');
 const filteredProducts = filter_products.filter(product =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  if(filteredProducts.length===0){
    return (
      <View className='h-screen'>
          <Navbar/>
        <View>
        <TextInput
          value={searchText}
          onChangeText={setSearchText} 
          placeholder="Search by name"
          placeholderTextColor='gray'
          className='border-2 text-black h-9 w-48 absolute bottom-4 rounded-lg left-14'/>
        </View>
        <View className='flex justify-center items-center'>
         <Image className='h-56 w-80 ' source={require('../assets/notFound.png')}/>
        </View>
      </View>
    )
  }else{
  return (
    <View className='mb-16'>
      <Navbar wantLogo={false}/>
      <View>
        <TextInput
        value={searchText}
        onChangeText={setSearchText} 
        placeholder="Search by name"
        placeholderTextColor='gray'
        className='border-2 text-black h-9 w-48 absolute bottom-4 rounded-lg left-14'/>
      </View>
      <FlatList numColumns={2}  data={filteredProducts}  keyExtractor={item => item._id} renderItem={({item})=>{
      return (
        <View className='flex-1 justify-center items-center' >
          <ProductCard {...item}/>
        </View>
        )
      }
      }/>
    </View>
  )
}
}
export default ProductScreen