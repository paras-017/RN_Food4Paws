import { View, Text, Image, TouchableOpacity, Button, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useProductContext } from '../context/productContext'
// import * as Icon from "react-native-feather";
import Star from '../common/Stars';
const API = `https://food4pawsapi-production.up.railway.app/api/products`
import Icon from 'react-native-vector-icons/FontAwesome'
import AddToCart from '../components/AddToCart';

const SingleProductScreen = ({route}) => {
    const {_id} = route.params
    const {getSingleProduct,isSingleLoading,singleProduct}=useProductContext()
    const {_id:Pid,name,brand,price=[{}],description1,description2,ingredients,stock,stars,review,images=[{url:''}],mainImage} = singleProduct
    const [selectedWeight, SetSelectedWeight] = useState('')
    const [priceInfo, setpriceInfo] = useState({ImgbySize:""})
    const [mainImg, setMainImg] = useState(mainImage)
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const defaultWeight = Object.keys(price[0])[0];
        handleWeightSelection(defaultWeight);
        getSingleProduct(`${API}?_id=${_id}`)
        if (mainImage)setMainImg(mainImage)
      }, [mainImage])

      const handleWeightSelection=(weight)=>{
        const selectedPriceInfo = price.find(item=>weight in item)
        if(selectedPriceInfo){
          SetSelectedWeight(weight)
          setpriceInfo(selectedPriceInfo[weight])
          
        }
    
      }
  return (
    <ScrollView className='bg-white'>
      <Navbar wantLogo={false}/>
      {/* IMAGE_SECTION */}
      <View>
        {/* Main_IMAGE */}
        <View className='w-screen h-96 '>
            <Image  style={styles.mainImage} source={{uri:mainImg}}/>
        </View>
        {/* OTHER_IMAGE */}
        <View className='flex-row gap-1 bg-white'>
            {images?.map((curElem,i)=>{
                return(
                   
                      <TouchableOpacity key={curElem.id} onPress={()=>setMainImg(curElem.url)}>
                        <Image source={{uri: curElem.url}} className='h-24 w-24'/>
                      </TouchableOpacity>
                   
                )
            })}
        </View>
      </View>


      {/* INFO_SECTION */}
      <View className='p-1 mt-2 space-y-3'>

      {/* NAME and RATING */}
        <View className='NAME space-y-1'>
          <Text className='text-gray-500 font-medium'>{brand}</Text>
          <Text className='text-black text-base font-semibold'>{name}</Text>
          <View><Star className='bg-green-300 ' stars={stars} reviews={review}/></View>
        </View>

      {/* PRICE ₹ */}
        <View className=" ">
        
              {priceInfo && (
                <View className="flex-row space-x-3 items-end ">
                  <Text className='text-black line-through  font-light text-base'>₹{priceInfo.originalPrice}</Text>
                  <Text className='text-black font-medium text-base'>₹{priceInfo.dealPrice}</Text>
                  <Text className='bg-red-400 w-16 h-6  rounded-2xl text-xs font-medium px-1 text-center py-1'>{priceInfo.discontPercent}% OFF</Text>
                </View>
              )}
             
        </View>
     
      {/* Weight BUTTONS */}
         <View className=' flex-row space-x-3 '>
              {price.map((item,i) => {
                        const weight = Object.keys(item)[0];
                        return (
                          <TouchableOpacity
                            key={i}
                            className={`px-3 py-1 rounded-2xl border border-[#2ab1c3]  ${
                              selectedWeight === weight ? "bg-[#2ab1c3] text-white" : " "
                            }`}
                            onPress={() => {
                            handleWeightSelection(weight)
                            setMainImg(item[weight].ImgbySize)
                          }}>
                          <Text className='text-black'>{weight}</Text>
                          </TouchableOpacity>
                        );
                })}
         </View>
      
    
      {/* ------Stock------ */}
        <View className="stock">
          <Text className='text-black font-medium'>Available:{priceInfo.discontPercent<=0?<Text className='text-red-700 font-bold'> Out of Stock</Text>:(<Text className='text-green-600 font-bold'> In Stock</Text>)}</Text>
        </View>
      
      {/*------ quantity and AddtoCart button------ */}
      <View>
       <AddToCart selectedWeight={selectedWeight} priceInfo={priceInfo} stock={stock} product={singleProduct} Pid={Pid}/>
      </View>

      
      {/* Warranty */}
      <View className='flex-row'>
        <Image className='h-20 w-20' source={require('../assets/Warranty/1.png')}/>
        <Image className='h-20 w-20' source={require('../assets/Warranty/2.png')}/>
        <Image className='h-20 w-20' source={require('../assets/Warranty/3.png')}/>
        <Image className='h-20 w-20' source={require('../assets/Warranty/4.png')}/>
      </View>

      {/*------Description------ */}
      <View className='descriptions space-y-4'>
        <Text className='text-sm text-black ' >{description1}</Text>
        <Text className='text-sm text-black ' >{description2}</Text>
        {ingredients &&
         <Text className='text-sm text-black' >
          <Text className='font-semibold'>Ingredients: </Text>
          {ingredients}</Text>}
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
export default SingleProductScreen