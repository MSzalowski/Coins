import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface Props {
  title: string
}

export default React.memo<Props>(({ title }) => (
  <View style={styles.container}>
    <Text>{title}</Text>
  </View>
))

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    height: 100,
    backgroundColor: 'red',
  },
})
