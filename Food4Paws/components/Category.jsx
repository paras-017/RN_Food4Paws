import { View, Text, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { category } from '../constants'
import { useNavigation } from '@react-navigation/native'

const Category = () => {
  const navigation = useNavigation()
    // console.log(category)
  return (
    <View>
      <FlatList horizontal className='' data={category} renderItem={({item})=>{
       return (
      <ScrollView showsHorizontalScrollIndicator={false} className="overflow-visible">
         <View className=' px-2'>
         <View className='mt-2 '>
         <TouchableOpacity onPress={()=>navigation.navigate('ProductScreen')}>
            <Image className='h-16 w-16 rounded-full' source={item.image} />
            <Text className='text-black font-bold text-center'>{item.name}</Text>
         </TouchableOpacity>
          </View>
         </View>
      </ScrollView>
       )

      }}/>
    </View>
  )
}

export default Category