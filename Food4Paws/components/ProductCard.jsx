import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';
import { useCartContext } from '../context/cartContext';

const ProductCard = ({ _id, name,brand,price,stars,review,mainImage}) => {
  const weight = Object.keys(price[0])[0]
  const pricebySize = price[0][weight]
  const navigation = useNavigation()
  const trimmedName = name.length > 33 ? name.slice(0, 33) + '...' : name;
  const [isWishListed, setIsWishListed] = useState(false);
  const {addFavProduct} = useCartContext()
  
  const toggleWishList = (id) => {
    setIsWishListed(!isWishListed);
    addFavProduct(id)
  };

  return (
    <TouchableOpacity onPress={()=>navigation.navigate('SingleProduct',{_id:_id})}>
      <View className='h-[300px] w-44 rounded-md  bg-white p-1 overflow-hidden m-1'>
      <View className='FAV_ITEM absolute z-50 right-2 top-1'>
        <TouchableOpacity onPress={()=>toggleWishList(_id)}>
         <Icon.Heart height={20} fill={isWishListed ? 'red' : 'white'} width={20} stroke={isWishListed ? 'red' : 'black'} />
        </TouchableOpacity>
      </View>
      <View className='Image h-40 w-40 p-3'>
        <Image className='h-full w-full object-contain ' source={{uri:mainImage}}/>
      </View>
      
      <View className="Text space-y-2">
        {/* product name brand */}
        <View>
          <Text className='text-black text-sm font-medium'>{trimmedName}</Text>
          <Text className='text-gray-500 font-semibold'>{brand}</Text>
        </View>
        {/* Rating */}
       <View className='flex-row space-x-2'>
          <View className='flex-row items-center space-x-1 bg-green-500  rounded-sm px-1'>
            <Text className='text-white font-medium'>{stars}</Text>
            <Icon.Star height={13} fill="#fff"  width={13} stroke={'white'}/>
          </View>
          <Text className='text-black'>({review})</Text>
       </View>
       {/* produce Price */}
       <View className='flex-row space-x-2 '>
        <Text className='text-black font-medium'>₹{pricebySize.dealPrice}</Text>
        <Text className='text-black line-through '>₹{pricebySize.originalPrice}</Text>
        <Text className='bg-red-400 w-14  rounded-2xl text-xs font-medium px-1 text-center flex py-1'>{pricebySize.discontPercent}% OFF</Text>
       </View>
      </View>
    </View>
    </TouchableOpacity>
  )
}

const style=StyleSheet.create({

})
export default ProductCard