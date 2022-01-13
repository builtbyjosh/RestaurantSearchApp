import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ searchTerm, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.container}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        placeholder="Search..."
        style={styles.textInput}
        value={searchTerm}
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit} 
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0EEEE',
    marginTop: 15,
    height: 50,
    borderRadius: 10,
    marginHorizontal: 15,
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10
  },
  textInput: {
    fontSize: 18,
    flex: 1,
  },
  iconStyle: {
    fontSize: 38,
    color: 'black',
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});
