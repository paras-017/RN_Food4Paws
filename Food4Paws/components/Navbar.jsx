import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';
import { useCartContext } from '../context/cartContext';

const Navbar = ({wantLogo}) => {
  const navigation = useNavigation()
  const {total_item}= useCartContext()
  return (
    <View className='flex-row justify-between  p-3'>
      <View  className='h-11  w-44  justify-center'>
        {wantLogo? <Image className='h-full w-full' source={require('../assets/navLogo.gif')}/>:
         <TouchableOpacity
          className="w-7 h-7 bg-gray-300 rounded-full items-center justify-center"
          onPress={navigation.goBack} >
          <Icon.ArrowLeft strokeWidth={3} stroke="black" />
         </TouchableOpacity>}
      </View>
      <View className='flex-row items-center space-x-4 mr-2 '>
        <TouchableOpacity onPress={()=>navigation.navigate('ProductScreen')}>
         <Icon.Search height={25} width={25} stroke={'black'}/>
        </TouchableOpacity>
        <Icon.Heart height={25} width={25} stroke={'black'}/>
        <View className='relative'>
         <Icon.ShoppingCart height={25} width={25} stroke={'black'}/>
         <Text className='text-black absolute bg-blue-400 h-5 w-5 text-center rounded-full bottom-4 left-3'>{total_item}</Text>
        </View>
      </View>
    </View>
  )
}

export default Navbar