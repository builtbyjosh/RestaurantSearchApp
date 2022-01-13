import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const ResultListItem = ({result}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{uri: result.image_url}} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.subtext}>{result.rating} Starts, {result.review_count} Reviews</Text>
    </View>
  )
}

export default ResultListItem

const styles = StyleSheet.create({
  imageStyle: {
    width: 250,
    height: 150,
    borderRadius: 5,
    marginBottom: 5
  },
  name: {
    fontWeight: 'bold',
    
  },
  subtext: {
    fontSize: 12
  },
  container: {
    marginLeft: 15
  }
})
