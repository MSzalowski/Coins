import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { HEADER_HEIGHT } from './Header'

export default React.memo(() => (
  <View style={styles.container}>
    <Text style={styles.label}>COIN</Text>
    <Text style={styles.label}>CHART 24H</Text>
    <Text style={styles.label}>PRICE</Text>
  </View>
))

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 16,
    top: HEADER_HEIGHT + 20,
  },
  label: {
    lineHeight: 20,
    color: 'gray',
  },
})
