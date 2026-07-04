import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'

const SocialBar = () => {
  return (
    <ScrollView style={styles.socialBarView} horizontal={true} showsHorizontalScrollIndicator={false}>
      <Image source={require("../../assets/images/react-logo.png")} style={styles.socialIcon} />
      <Image source={require("../../assets/images/react-logo.png")} style={styles.socialIcon}/>
      <Image source={require("../../assets/images/react-logo.png")} style={styles.socialIcon}/>
      <Image source={require("../../assets/images/react-logo.png")} style={styles.socialIcon}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    socialBarView : {
      backgroundColor: 'white',  
      flex: 1
    },
    socialIcon: {
      width: 50,
      height: 50,
      marginHorizontal: 10,
      borderRadius: 30,
      outlineColor: 'black',
    }
})

export default SocialBar