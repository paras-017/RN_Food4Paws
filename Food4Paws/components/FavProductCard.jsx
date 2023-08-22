import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import Star from '../common/Stars';
import { useNavigation } from '@react-navigation/native';

const FavProductCard = ({_id,name,brand,dealPrice,stock,stars,review,mainImage,removeFav}) => {
    const trimmedName = name.length > 46 ? name.slice(0, 46) + '...' : name;
    const navigation = useNavigation()
  return (
    <ScrollView>
    <View className='border-2 border-gray-200 rounded-md p-1 h-[132px] mb-3 flex justify-center'>
    <View className="flex-row justify-between space-x-4 ">
        {/* IMAGE & INFO */}
        <View className='img&Info flex-row items-start relative  '>
            <TouchableOpacity className='flex-row' onPress={()=>navigation.navigate('SingleProduct',{_id:_id})}>
              {/*----IMAGE---- */}
            <View className="IMAGE h-32 w-28">
                <Image style={styles.mainImage} source={{uri:mainImage}}/>
            </View>

            {/*----INFO----*/}
            <View className="INFO space-y-1 ml-2 mt-1">
                {/* NAME */}
               <View>
                <Text className='w-52 text-black font-medium'>{trimmedName}</Text>
                <Text className='w-44 text-gray-600 font-medium'>{brand}</Text>
               </View>
                {/* RATINGS */}
                <View className='flex-row space-x-2'>
                    <View className='flex-row items-center space-x-1 bg-green-500  rounded-sm px-1'>
                        <Text className='text-white font-medium'>{stars}</Text>
                        <Icon.Star height={13} fill="#fff"  width={13} stroke={'white'}/>
                    </View>
                    <Text className='text-black'>({review})</Text>
                </View>
                {/* Price */}
                <View>
                <Text className='text-gray-700 font-medium text-base '>₹{dealPrice}</Text>
                </View>
            </View>
            </TouchableOpacity>

            {/* REMOVE BUTTON */}
           <TouchableOpacity onPress={()=>removeFav(_id)}>
            <View className='absolute -right-11 '>
              <Icon.XCircle fill="#000" height={25} width={25} stroke={'white'}/>
            </View>
           </TouchableOpacity>
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
export default FavProductCard