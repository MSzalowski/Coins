import React from 'react'
import { FormattedTicker } from 'models'
import { View, StyleSheet, Text } from 'react-native'

export default React.memo<FormattedTicker>(({ name, symbol, rank }) => (
  <View style={styles.container}>
    <View style={styles.column}>
      <View style={styles.row}>
        <View style={styles.logoPlaceholder} />
        <Text style={styles.symbol}>{symbol}</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.rankContainer}>
          <Text style={styles.rank}>{rank}</Text>
        </View>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  </View>
))

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 4,
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'gray',
  },
  column: {
    flexDirection: 'column',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 4,
  },
  logoPlaceholder: {
    height: 24,
    borderRadius: 12,
    width: 24,
    backgroundColor: 'red',
  },
  symbol: {
    fontWeight: '600',
    color: '#FFF',
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 8,
  },
  rankContainer: {
    height: 24,
    width: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2c2c2e',
  },
  rank: {
    color: '#FFF',
  },
  name: {
    color: 'gray',
    fontSize: 16,
    marginLeft: 8,
  },
})
