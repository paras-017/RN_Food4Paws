import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useCartContext } from '../context/cartContext'
import Navbar from '../components/Navbar'
import { useNavigation } from '@react-navigation/native'
import CartItem from '../components/CartItem'
import RazorpayCheckout from 'react-native-razorpay';
import EmptyCart from '../components/EmptyCart'

const CheckoutScreen = () => {
  const {cart,total_price,total_originalPrice} = useCartContext()
  const navigation = useNavigation()
  
    
  if(cart.length===0){
    return (
      <EmptyCart imageType={require('../assets/EmptyCart.png')} text1={'Hey, it feels so light'} text2={"There is nothing in your bag. Let's add some items"}/>
    )
  }


  return (
    <ScrollView>
      <Navbar wantLogo={false}/>
      <View className='px-2'>
          {/* HEADING */}
          <View className='flex-row justify-between mb-3'>
            <Text className='text-black'>Your Cart</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('ProductScreen')}><Text className='text-[#2ab1c3] border-b-2 border-[#2ab1c3] '>Continue Shopping</Text></TouchableOpacity>
          </View>

          {/* PRODUCT CARDS*/}
          <View className=''>
          {cart.map((item,i)=>{
                return <CartItem key={item.id} {...item}/>
            })}
          </View>

          {/* SUMMARY */}
          <View>
            <Text className='text-2xl font-semibold text-black '>Summary</Text>
            {/* PROMO-CODE */}
            <View style={{ paddingVertical: 2 }}>
              <Text style={{ fontSize: 15,color:'black' }}>Promo Code</Text>
              <Text style={{ fontSize: 12, color: '#888' }}>Remove any spaces or dashes before applying</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TextInput
                  id='promo'
                  placeholder="Enter promo code"
                  placeholderTextColor="rgb(156 163 175)"
                  style={{ flex: 1, paddingVertical: 3, paddingHorizontal: 16, borderWidth: 1, borderColor: '#ccc', borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }}
                />
                <TouchableOpacity
                  style={{ backgroundColor: '#333', paddingVertical: 8, paddingHorizontal: 16, borderTopRightRadius: 8, borderBottomRightRadius: 8 }}
                >
                  <Text style={{ color: 'white'}}>Apply</Text>
                </TouchableOpacity>
              </View>
           </View>
          </View>
      
          {/* ---------Total Detail--------- */}
          <View className='total space-y-1 py-3'>
            {/* ---------Total MRP--------- */}
            <View className='subTotal flex-row justify-between'>
              <Text className='text-black '>Total MRP</Text>
              <Text className='text-black font-bold'>₹{total_originalPrice}</Text>
            </View>
            {/* ---------Disoncount on MRP--------- */}
            <View className='subTotal flex-row justify-between'>
              <Text className='text-black '>Discont on MRP</Text>
              <Text className='font-bold text-green-600'>- ₹{total_originalPrice-total_price}</Text>
            </View>
            {/* ---------Subtotal--------- */}
            <View className='subTotal flex-row justify-between'>
              <Text className='text-black '>Subtotal</Text>
              <Text className='text-black font-bold'>₹{total_price}</Text>
            </View>
        
            {/* ---------Delivery Charges--------- */}
            <View className='subTotal flex-row justify-between'>
              <Text className='text-black '>Delivery Charges</Text>
              <Text className='font-bold text-red-500'>+ {50}</Text>
            </View>
            <View className='border-b-2 py-2 border-gray-300'></View>
            {/* ---------Total Amount--------- */}
            <View className='subTotal flex-row justify-between'>
              <Text className='text-black '>Total amount</Text>
              <Text className='text-black font-bold'>₹{50+total_price}</Text>
            </View>
          </View>

          {/* PAYMENT */}
          <View>
            <TouchableOpacity style={styles.checkOutBtn} onPress={()=>{
               var options = {
                    description: 'Credits towards consultation',
                    image: require('../assets/navLogo.gif'),
                    currency: 'INR',
                    key: 'rzp_test_a2xr9ZzGOgOFur',
                    amount: (50+total_price)*100,
                    name: 'Food4Paws',
                    order_id: '',//Replace this with an order_id created using Orders API.
                    prefill: {
                      email: 'fake.user@example.com',
                      contact: '7060445812',
                      name: 'Fake user'
                    },
                    theme: {color: '#2ab1c3'}
                  }
                  RazorpayCheckout.open(options).then((data) => {
                    // handle success
                    alert(`Success: ${data.razorpay_payment_id}`);
                  }).catch((error) => {
                    // handle failure
                    // alert(`Error: ${error.code} | ${error.description}`);
                  });
              }}>
              <Text className='text-slate-200 text-lg font-medium'>Pay  ₹{50+total_price}</Text>
            </TouchableOpacity>
          </View>
         
        
        
      </View>
    </ScrollView>
  )
}

export default CheckoutScreen

const styles = StyleSheet.create({
  textBlack:{
    color:'black'
  },
  checkOutBtn:{
   width:'100%',
   height:50,
   borderRadius:10,
   backgroundColor:'black',
   color:'white',
   alignSelf:'center',
   justifyContent:'center',
   alignItems:'center'
  }
})