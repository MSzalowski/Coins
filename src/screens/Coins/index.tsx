import React, { useEffect, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { FlatList, StyleSheet, View } from 'react-native'
import { Header, ListHeaderComponent, ListItem } from 'components'
import { FormattedTicker } from 'models'
import { HEADER_HEIGHT } from 'components/Header'
import { fetchTickers } from '../../client'

const Coins: React.FC = () => {
  const insets = useSafeAreaInsets()
  const [data, setData] = useState<FormattedTicker[]>()

  useEffect(() => {
    const init = async () => {
      try {
        setData(await fetchTickers())
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
        actions={[{ label: 'ALL COINS', onPress: console.log }]}
      />
      <ListHeaderComponent />
      <FlatList
        data={data}
        style={{ top: HEADER_HEIGHT + 20 }}
        renderItem={({ item }) => <ListItem {...item} />}
        keyExtractor={(item) => item.id}
        onEndReached={console.log}
        onScroll={console.log}
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
