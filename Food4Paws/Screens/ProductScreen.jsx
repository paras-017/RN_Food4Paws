import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';
import Navbar from '../components/Navbar';
import { products } from '../components/product';
import ProductCard from '../components/ProductCard';
// import { useProductContext } from '../context/productContext';

const ProductScreen = ({route}) => {
 const navigation = useNavigation()
 console.log(products.length)
  return (
    <View className='mb-16'>
      <Navbar wantLogo={false}/>
      <FlatList numColumns={2}  data={products}  keyExtractor={item => item._id} renderItem={({item})=>{
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
export default ProductScreen