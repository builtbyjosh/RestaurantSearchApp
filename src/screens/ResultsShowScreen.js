import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import yelp from '../api/yelp'

const ResultsShowScreen = ({navigation}) => {
  const id = navigation.getParam('id')

  return (
    <View>
      <Text>Text</Text>
    </View>
  )
}

export default ResultsShowScreen

const styles = StyleSheet.create({

})
