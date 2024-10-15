import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const More = () => {
  return (
    <View style = {styles.bigb}>
      <View style={styles.container}>
      <Text style={styles.text}>More</Text>
      </View>
    </View>
  )
}

export default More

const styles = StyleSheet.create({
  text:{
    color:'#000',
    fontWeight:'bold',
    fontSize:30,
  },
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    height:100,
    width:50,
    
    borderRadius:100,
    backgroundColor:'#4FAD55'
  },
  bigb:{
    height:200,
    width:200,
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    marginHorizontal:'auto',
    backgroundColor:'#82C9FF',
  }
})