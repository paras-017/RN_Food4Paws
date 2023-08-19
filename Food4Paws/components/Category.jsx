import { View, Text, FlatList, Image, ScrollView } from 'react-native'
import React from 'react'
import { category } from '../constants'

const Category = () => {
    // console.log(category)
  return (
    <View>
      <FlatList horizontal className='' data={category} renderItem={({item})=>{
       return (
      <ScrollView showsHorizontalScrollIndicator={false} className="overflow-visible">
         <View className=' px-2'>
         <View className='mt-2 '>
            <Image className='h-16 w-16 rounded-full' source={item.image} />
            <Text className='text-black font-bold text-center'>{item.name}</Text>
          </View>
         </View>
      </ScrollView>
       )

      }}/>
    </View>
  )
}

export default Category