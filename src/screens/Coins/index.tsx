import React, { useCallback, useEffect, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native'
import { Header, ListHeaderComponent, ListItem } from 'components'
import Snackbar from 'react-native-snackbar'
import { useDidMountEffect } from 'utils'
import { HEADER_HEIGHT } from 'components/Header'
import { useCoins, fetchTickers } from './CoinsContext'

const defaultChunkSize = 1000

const Coins: React.FC = () => {
  const insets = useSafeAreaInsets()
  const [lastIndex, setLastIndex] = useState(0)
  const {
    state: { tickers, loading, error },
    dispatch,
  } = useCoins()

  useDidMountEffect(() => {
    const init = async () => {
      await fetchTickers(dispatch, lastIndex, defaultChunkSize)
    }
    void init()
  }, [])

  useEffect(() => {
    if (!loading && error) {
      Snackbar.show({
        duration: Snackbar.LENGTH_SHORT,
        text: 'Something went wrong',
      })
    }
  }, [loading, error])

  const handleEndReached = useCallback(async () => {
    await fetchTickers(dispatch, lastIndex + defaultChunkSize, defaultChunkSize)
    setLastIndex((prevIndex) => prevIndex + defaultChunkSize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  return (
    <View style={[styles.container, { marginTop: insets.top }]}>
      <Header
        title="Coins"
        actions={[{ label: 'ALL COINS', onPress: console.log }]}
      />
      <ListHeaderComponent />
      {!loading && (
        <FlatList
          data={tickers}
          style={{ top: HEADER_HEIGHT + 20 }}
          renderItem={({ item }) => <ListItem {...item} />}
          keyExtractor={(item) => item.id}
          onEndReached={handleEndReached}
        />
      )}
      {loading && <ActivityIndicator style={styles.activityIndicator} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  activityIndicator: {
    position: 'absolute',
    alignSelf: 'center',
    top: '50%',
  },
})

export default Coins
