import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar'
import Category from '../components/Category'
import Carousel from '../components/Carousel'

const HomeScreen = () => {
  return (
    <View>
      <Navbar/>
      <Category/>
      <Carousel/>
      
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})