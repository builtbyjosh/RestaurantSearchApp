import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import yelp from '../api/yelp'

const ResultsShowScreen = ({navigation}) => {
  const [result, setResult] = useState(null)
  const id = navigation.getParam('id')

  const fetchBusiness = async (id) => {
    let res = await yelp.get(`/${id}`)
    setResult(res.data)
  }

  useEffect(() => {
    fetchBusiness(id)
  }, [])
  if(!result){
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
      data={result.photos}
      keyExtractor={(photo) => photo}
      renderItem={({item})=>{
        return <Image style={styles.image} source={{uri: item}} />
      }}
      />
    </View>
  )
}

export default ResultsShowScreen

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
    marginVertical: 10,
    borderRadius: 10,
    alignSelf: 'center'
  }
})
