import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ResultsList from '../components/ResultsList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();
  const filterByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      
      <ScrollView>
        <ResultsList title={'Cost Effective'} results={filterByPrice('$')} />
        <ResultsList title={'Bit Pricier'} results={filterByPrice('$$')} />
        <ResultsList title={'Big Spender'} results={filterByPrice('$$$')} />
        <ResultsList title={'Besoz Money'} results={filterByPrice('$$$$')} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
