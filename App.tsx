import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import { CoinsProvider } from 'screens/Coins/CoinsContext'
import { Coins } from './src/screens'

const App = () => (
  <SafeAreaProvider style={styles.safeArea}>
    <ActionSheetProvider>
      <CoinsProvider>
        <Coins />
      </CoinsProvider>
    </ActionSheetProvider>
  </SafeAreaProvider>
)

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
})

export default App
