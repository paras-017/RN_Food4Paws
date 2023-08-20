import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useCartContext } from '../context/cartContext'
import Icon from 'react-native-vector-icons/FontAwesome'
import QuantityButton from './QuantityButton'

const CartItem = ({id,image,name,priceInfo,selectedWeight,quantity}) => {
  const {removeItem, setDecrease, setIncrement}=useCartContext()
  const trimmedName = name.length > 50 ? name.slice(0, 50) + '...' : name;
  return (
    <ScrollView>
        <View className='border-2 border-gray-200 rounded-md p-1 h-28 mb-3'>
        <View className="flex-row justify-between space-x-4">
        {/* IMAGE & INFO */}
        <View className='img&Info flex-row '>
            {/*----IMAGE---- */}
            <View className="IMAGE h-24 w-24">
                <Image style={styles.mainImage} source={{uri:image}}/>
            </View>
            {/*----INFO----*/}
            <View className="INFO space-y-2 ml-1">
                <Text className='w-44 text-black'>{trimmedName}</Text>
                <View>
                <Text className='text-gray-600 text-sm sm:text-base'>₹{priceInfo}</Text>
                <Text className='text-gray-600 text-sm sm:text-base'>Size: {selectedWeight}</Text>
                </View>
            </View>
        </View>

        {/* -----QUANTITY------ */}
        <View className='quantiy&Price relative'>
            <View className='flex space-x-2'>
                
                
                <TouchableOpacity onPress={()=>removeItem(id)}>
                 <Icon className='flex-1 ' name="remove" size={15} color="#000" />
                </TouchableOpacity>
               
                    <View className='absolute right-0 top-[36px]'>
                     <QuantityButton quantity={quantity} setDecrease={()=>setDecrease(id)} setIncrease={()=>setIncrement(id)}/>
                    </View>
                    <View className='absolute right-0 top-[72px] w-20 bg-gray-800 text-white  rounded-md p-1'>
                        <Text className='text-center'>₹{priceInfo*quantity}</Text>
                    </View>
             
            </View>
        </View>
        </View>
    </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    mainImage:{
      flex: 1,
      width:'100%',
      resizeMode: 'contain',
    }
  })
export default CartItem