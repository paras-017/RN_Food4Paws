import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import { useCartContext } from '../context/cartContext'
import QuantityButton from './QuantityButton'
import { useNavigation } from '@react-navigation/native'
import { useToast } from "react-native-toast-notifications";

const AddToCart = ({selectedWeight,priceInfo, stock,product, Pid}) => {
    const toast = useToast();
    const {addToCart} = useCartContext()    
    const [quantity, setQuantity] = useState(1)
    const navigation = useNavigation()
    const setDecrease = () => {
        quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
      };
    const setIncrease = () => {
        quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock);
      };
  return (
    <View>
        <QuantityButton quantity={quantity} setDecrease={setDecrease} setIncrease={setIncrease}/>
        <View>
        {priceInfo.discontPercent<=0?
            <Button title='Notify Me' disabled/>:
            <Button title='Add to Cart' onPress={()=>{
                addToCart(selectedWeight,quantity,priceInfo,product,Pid)
                toast.show("Item added to Cart", {
                  type: "success",
                  placement: "top",
                  duration: 1800,
                  offset: 30,
                  animationType: "slide-in ",
                })
            }}/>
        }
        </View>
      
    </View>
  )
}

export default AddToCart