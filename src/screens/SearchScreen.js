import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import yelp from '../api/yelp';
import RestaurantList from '../components/RestaurantList';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState('')
  
  const fetchResults = async () => {
    try {
      const res = await yelp.get('/search', {
      params: {
        term: searchTerm,
        limit: 50,
        location: 'chicago'
      }
    })
    setResults(await res.data.businesses)
    setErrorMsg('')
    } catch (err) {
      setErrorMsg('Opps!! Something went wrong.')
    }
    
  }

  return (
    <View>
      <SearchBar 
        searchTerm={searchTerm} 
        onTermChange={setSearchTerm} 
        onTermSubmit={fetchResults} 
      />
      <RestaurantList  />
      <Text>{results.length}</Text>
      {errorMsg ? <Text>{errorMsg}</Text> : null}
    </View>
  );
}; 

export default SearchScreen;

const styles = StyleSheet.create({});
