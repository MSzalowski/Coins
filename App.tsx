import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Coins } from './src/screens'

const App = () => (
  <SafeAreaProvider style={styles.safeArea}>
    <Coins />
  </SafeAreaProvider>
)

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
})

export default App
