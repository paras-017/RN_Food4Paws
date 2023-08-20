import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const QuantityButton = ({ quantity,setDecrease,setIncrease}) => {
  return (
    <View className='flex-row items-center  border w-20 justify-around rounded-md mb-3'>
      <TouchableOpacity onPress={()=>setDecrease()}><Text className='text-black text-xl'>-</Text></TouchableOpacity>
      <Text className='text-black'>{quantity}</Text>
      <TouchableOpacity onPress={()=>setIncrease()}><Text className='text-black text-xl'>+</Text></TouchableOpacity>
    </View>
  )
}

export default QuantityButton