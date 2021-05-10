import React, { useCallback, useEffect, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native'
import { Header, ListHeaderComponent, ListItem } from 'components'
import Snackbar from 'react-native-snackbar'
import { useActionSheet } from '@expo/react-native-action-sheet'
import { HEADER_HEIGHT } from 'components/Header'
import { useCoins, fetchTickers } from './CoinsContext'

const defaultChunkSize = 1000

const headerActionOptions = [
  'TOP 100',
  'TOP 200',
  'TOP 300',
  'All Coins',
  'Cancel',
]

const Coins: React.FC = () => {
  const insets = useSafeAreaInsets()
  const { showActionSheetWithOptions } = useActionSheet()
  const [chunkSize, setChunkSize] = useState(defaultChunkSize)
  const {
    state: { tickers, loading, error },
    dispatch,
  } = useCoins()

  useEffect(() => {
    if (!tickers?.length) {
      const init = async () => {
        await fetchTickers(dispatch)
      }
      void init()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    await fetchTickers(dispatch)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  const handleHeaderActionPress = () => {
    showActionSheetWithOptions(
      {
        userInterfaceStyle: 'dark',
        options: headerActionOptions,
        cancelButtonIndex: 4,
      },
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            setChunkSize(100)
            break
          case 1:
            setChunkSize(200)
            break
          case 2:
            setChunkSize(300)
            break
          default:
            setChunkSize(defaultChunkSize)
            break
        }
      },
    )
  }

  return (
    <View style={[styles.container, { marginTop: insets.top }]}>
      <Header
        title="Coins"
        actions={[
          {
            label:
              headerActionOptions[chunkSize < 1000 ? chunkSize / 100 - 1 : 3],
            onPress: handleHeaderActionPress,
          },
        ]}
      />
      <ListHeaderComponent />
      {!loading && (
        <FlatList
          data={tickers.slice(0, chunkSize)}
          style={{ top: HEADER_HEIGHT + 20 }}
          renderItem={({ item }) => <ListItem {...item} />}
          keyExtractor={(item) => item.id}
          onEndReached={chunkSize < 1000 ? handleEndReached : null}
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
