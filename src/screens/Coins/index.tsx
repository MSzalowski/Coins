import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { StyleSheet, View } from 'react-native'
import { AnimatedHeader } from 'components'

const Coins: React.FC = () => {
  const insets = useSafeAreaInsets()
  return (
    <View style={[styles.container, { marginTop: insets.top }]}>
      <AnimatedHeader title="Coins" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
})

export default Coins
