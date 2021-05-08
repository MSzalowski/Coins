import React from 'react'
import { FormattedTicker } from 'models'
import { View, StyleSheet, Text } from 'react-native'
import { SvgUri } from 'react-native-svg'

const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export default React.memo<FormattedTicker>(
  ({ name, symbol, rank, chartUrl, price, percent }) => (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.column}>
          <View style={styles.row}>
            <View style={styles.logoPlaceholder} />
            <Text style={styles.symbol}>{symbol}</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.rankContainer}>
              <Text style={styles.rank}>{rank}</Text>
            </View>
            <Text style={styles.name} ellipsizeMode="tail">
              {name}
            </Text>
          </View>
        </View>
      </View>
      {chartUrl && (
        <View style={styles.section}>
          <SvgUri uri={chartUrl} />
        </View>
      )}
      <View style={styles.section}>
        <View style={styles.column}>
          <Text style={styles.price}>{priceFormatter.format(price)}</Text>
          <View
            style={[
              styles.percentBadge,
              // eslint-disable-next-line react-native/no-inline-styles
              { backgroundColor: percent > 0 ? 'green' : 'red' },
            ]}>
            <Text style={styles.percent}>
              {percent > 0 ? `+${percent}%` : `${percent}%`}
            </Text>
          </View>
        </View>
      </View>
    </View>
  ),
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'gray',
  },
  section: {
    flex: 1,
  },
  priceContainer: {
    alignItems: 'flex-end',
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
    paddingHorizontal: 8,
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
  price: {
    fontWeight: '500',
    fontSize: 16,
    color: '#FFF',
    textAlign: 'right',
  },
  percent: {
    fontWeight: '500',
    fontSize: 16,
  },
  percentBadge: {
    marginTop: 8,
    borderRadius: 4,
    alignSelf: 'flex-end',
    padding: 4,
  },
})
