import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'

const Star = ({ stars, reviews }) => {
    
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <View key={index}>
        {stars >= index + 1 ? (
          <Icon  name="star" size={20} color="#2ab1c3" />
        ) : stars >= number ? (
           <Icon  name="star-half-empty" size={20} color="#2ab1c3" />
        ) : (
           <Icon  name="star-o" size={20} color="#2ab1c3" />
        )}
      </View>
    );
  });

  return (
   
      <View style={styles.iconStyle}>
        {ratingStar}
        <Text style={styles.textDark}>({reviews} customer reviews)</Text>
      </View>

  );
};

const styles = StyleSheet.create({
 
  iconStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',    
  },
  icon: {
    fontSize: 16,
    color: '#2ab1c3',
  },
  textDark:{
    color:'black',
    marginLeft:12
  }
});

export default Star;