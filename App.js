/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import Post from './src/components/post';
import HomeScreen from './src/screens/home';
import SearchResultsScreen from './src/screens/SearchResults';

import feed from './assets/data/feed';

const post1 = feed[0];

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <Post post={post1} /> */}
        <SearchResultsScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
