import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RestaurantList from '../components/RestaurantList';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');



  return (
    <View>
      <SearchBar 
        searchTerm={searchTerm} 
        onTermChange={setSearchTerm} 
        // onTermSubmit={} 
      />
      <RestaurantList  />
      <Text>{searchTerm}</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
