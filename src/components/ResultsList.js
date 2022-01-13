import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ResultListItem from './ResultListItem';
import { withNavigation } from 'react-navigation';

const ResultsList = ({ title, results, navigation }) => {
  if(!results.length){
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result)=> result.id}
        renderItem={({item})=>{
          return (
            <TouchableOpacity onPress={()=>{navigation.navigate('ResultsShow',{id: item.id})}}>
              <ResultListItem result={item} />
            </TouchableOpacity>
          )
        }}
        
      />
    </View>
  );
};

export default withNavigation(ResultsList);

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  },
  container: {
    marginBottom: 10,
    
  }
});
