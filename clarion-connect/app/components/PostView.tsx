import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const PostView = () => {
  return (
    <View style={styles.screen}>
        <Text>PostView</Text>
    </View>
  )
}



const styles = StyleSheet.create({
    screen : {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding: 24,
    }
})
export default PostView