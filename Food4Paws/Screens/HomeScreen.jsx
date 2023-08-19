import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar'
import Category from '../components/Category'
import Carousel from '../components/Carousel'

const HomeScreen = () => {
  return (
    <ScrollView>
      <View>
      <Navbar/>
      <Category/>
      <Carousel/>
      <View className='space-y-3 mb-3'>
        <Image className='h-32 w-screen' source={require('../assets/offers/1.jpg')}/>
        <Image className='h-32 w-screen' source={require('../assets/offers/2.jpg')}/>
        <Image className='h-32 w-screen' source={require('../assets/offers/3.jpg')}/>
      </View>

      {/* ✨Explore By Pet Category ✨ */}
      <View>
          <Text className='text-black text-center text-xl font-bold'>✨Explore By Pet Category ✨</Text>
          <View className='flex items-center space-y-3 my-3'>
            <View className='flex-row space-x-4'>
              <Image className='h-16 w-28 rounded-2xl' source={require('../assets/HomePage/petCategories/cat.jpg')}/>
              <Image className='h-16 w-28 rounded-2xl' source={require('../assets/HomePage/petCategories/dog.jpg')}/>
              <Image className='h-16 w-28 rounded-2xl' source={require('../assets/HomePage/petCategories/birds.jpg')}/>
            </View>
            <View className='flex-row space-x-4'>
              <Image className='h-16 w-28 rounded-2xl' source={require('../assets/HomePage/petCategories/fish.jpg')}/>
              <Image className='h-16 w-28 rounded-2xl' source={require('../assets/HomePage/petCategories/guineaPig.jpg')}/>
              <Image className='h-16 w-28 rounded-2xl' source={require('../assets/HomePage/petCategories/rabbit.jpg')}/>
            </View>
          </View>
      </View>
      
      {/* Our Sponsors */}
      <View>
        <View>
          
        </View>
      </View>
    </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})