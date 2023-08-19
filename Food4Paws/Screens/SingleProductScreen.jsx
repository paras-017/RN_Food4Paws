import { View, Text } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar'

const SingleProductScreen = ({route}) => {
    const {id} = route.params
  return (
    <View>
      <Navbar wantLogo={false}/>
      <Text className='text-black'>SingleProductScreen for product {id}</Text>
    </View>
  )
}

export default SingleProductScreen