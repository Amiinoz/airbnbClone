import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import styles from '../../components/post/styles.js';
import './styles.js';

const DestinationSearchScreen = () => {
  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.container}>
      {/* Input component  */}
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
      />

      {/* List of destination  */}
    </View>
  );
};

export default DestinationSearchScreen;
