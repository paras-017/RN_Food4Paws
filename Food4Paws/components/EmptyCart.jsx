import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Navbar from './Navbar'
import { useNavigation } from '@react-navigation/native'

const EmptyCart = ({imageType,text1,text2}) => {
    const navigation = useNavigation()
  return (
    <View className='bg-white h-screen '>
        <Navbar/>
         <View className='flex justify-center items-center mt-44 space-y-3'>
          <View><Text className='text-black text-lg font-bold'>{text1}</Text></View>
          <View><Text className='text-gray-400 w-96 text-center font-medium'>{text2}</Text></View>
          <View><Image className='h-40 w-40' source={imageType}/></View>
          <TouchableOpacity onPress={()=> navigation.navigate('ProductScreen')}>
            <Text className='text-blue-500 text-base font-medium border border-blue-400 px-3 py-2'>CONTINUE SHOPPING</Text>
          </TouchableOpacity>
         </View>
        </View>
  )
}

export default EmptyCart