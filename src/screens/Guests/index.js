import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles.js';

const GuestsScreen = props => {
  return (
    <View>
      <View>
        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}>Adults</Text>
            <Text style={{color: '#8d8d8d'}}>Ages 13 or above</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{marginHorizontal: 20, fontSize: 16}}></Text>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}>Children</Text>
            <Text style={{color: '#8d8d8d'}}>Ages 2-12</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{marginHorizontal: 20, fontSize: 16}}></Text>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <Text style={{fontWeight: 'bold'}}>Infants</Text>
            <Text style={{color: '#8d8d8d'}}>Under 2</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{marginHorizontal: 20, fontSize: 16}}></Text>
          </View>
        </View>
      </View>

      <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
        Search
      </Text>
    </View>
  );
};

export default GuestsScreen;
