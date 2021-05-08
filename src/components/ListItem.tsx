import { FormattedTicker } from 'models'
import React from 'react'
import { View, StyleSheet } from 'react-native'

export default React.memo<FormattedTicker>(() => (
  <View style={styles.container} />
))

const styles = StyleSheet.create({
  container: {
    height: 75,
    flexDirection: 'row',
    backgroundColor: 'blue',
    marginTop: 4,
  },
})
