import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import {Ellipsis} from 'lucide-react-native'
const PostView = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image source={require('../../assets/images/react-logo.png')} style={styles.headerImage} />
          <Text style={styles.nameText}>Name</Text>
        </View>
        <Ellipsis size={20} color="#666" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    paddingTop: 16,
    backgroundColor: '#ffffff',
    marginTop: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  nameText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111111',
  },
})
export default PostView