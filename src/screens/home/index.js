import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

const HomeScreen = () => {
  return (
    <View>
      {/* search bar  */}
      <Pressable
        style={styles.searchButton}
        onPress={() => console.warn('Search button clicked')}>
        <Fontisto name={'search'} size={25} color={'#f15454'} />

        <Text styles={styles.buttonText}>Where are you going? </Text>
      </Pressable>

      {/* image  */}
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        {/* title */}
        <Text style={styles.title}>Go Near</Text>

        {/* button */}
        <Pressable
          style={styles.button}
          onPress={() => console.warn('Explore button clicked')}>
          <Text styles={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
