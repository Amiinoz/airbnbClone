import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Post = props => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
      />

      {/* Bed/Bedrooms */}
      <Text style={styles.bedrooms}> 1 bed 1 bedroom</Text>

      {/* Type / description */}
      <Text style={styles.description} numberOfLines={2}>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour
      </Text>

      {/* Old price / new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$38 </Text>
        <Text style={styles.newPrice}> $26 </Text>/ Night
      </Text>

      {/* Total price */}
      <Text style={styles.totalPrice}>$220</Text>
    </View>
  );
};

export default Post;
