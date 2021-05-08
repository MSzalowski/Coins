import React, { useEffect, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { StyleSheet, View } from 'react-native'
import { Header, ListItem } from 'components'
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

  console.log(data)

  return (
    <View style={[styles.container, { marginTop: insets.top }]}>
      <Header
        title="Coins"
        actions={[
          { label: 'all coins', onPress: console.log },
          { label: 'market cap', onPress: console.log },
        ]}
      />
      <View style={{ top: HEADER_HEIGHT }}>
        {data?.map((item) => (
          <ListItem key={item.id} {...item} />
        ))}
      </View>
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
