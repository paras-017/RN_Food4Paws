import { View, Text, Image } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";

const Navbar = () => {
  return (
    <View className='flex-row justify-between p-3'>
      <View  className='h-11  w-44'>
        <Image className='h-full w-full' source={require('../assets/navLogo.gif')}/>
      </View>
      <View className='flex-row items-center space-x-3 '>
        <Icon.Search height={25} width={25} stroke={'black'}/>
        <Icon.Heart height={25} width={25} stroke={'black'}/>
        <View className='relative'>
         <Icon.ShoppingCart height={25} width={25} stroke={'black'}/>
         <Text className='text-black absolute bg-blue-400 h-5 w-5 text-center rounded-full bottom-4 left-3'>5</Text>
        </View>
      </View>

    </View>
  )
}

export default Navbar