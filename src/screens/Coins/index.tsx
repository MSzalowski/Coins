import React, { useEffect } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { StyleSheet, View } from 'react-native'
import { Header } from 'components'
import { fetchTickers } from '../../client'

const Coins: React.FC = () => {
  const insets = useSafeAreaInsets()

  useEffect(() => {
    const init = async () => {
      try {
        console.log(await fetchTickers())
      } catch (e) {
        console.log(e)
      }
    }

    void init()
  }, [])

  return (
    <View style={[styles.container, { marginTop: insets.top }]}>
      <Header
        title="Coins"
        actions={[
          { label: 'all coins', onPress: console.log },
          { label: 'market cap', onPress: console.log },
        ]}
      />
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
