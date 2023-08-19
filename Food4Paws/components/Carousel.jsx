import { View, Text, FlatList, Image } from 'react-native';
import React, { useState, useRef, useEffect } from 'react'; // Import useState, useRef, and useEffect
import { carousel } from '../constants';

const Carousel = () => {
  const flatListRef = useRef(null); // Ref to FlatList
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current index

  useEffect(() => {
    const automaticSlide = setInterval(() => {
      const nextIndex = (currentIndex + 1) % carousel.length;
      setCurrentIndex(nextIndex);
      flatListRef.current.scrollToIndex({ index: nextIndex }); // Scroll to the next index
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(automaticSlide); // Clear interval on component unmount
  }, [currentIndex]);

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={carousel}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View>
              <View className='h-72 py-2  w-screen'>
                <Image className='w-full h-full' source={item.image} />
              </View>
            </View>
          );
        }}
        horizontal // Set FlatList to horizontal mode
        pagingEnabled // Enable paging for automatic sliding effect
        showsHorizontalScrollIndicator={false} // Hide scroll indicators
      />
    </View>
  );
};

export default Carousel;