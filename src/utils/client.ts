import CoinpaprikaAPI from '@coinpaprika/api-nodejs-client'
import { FormattedTicker, Ticker } from '../models'

const client = new CoinpaprikaAPI()

export const fetchTickers = async (): Promise<FormattedTicker[]> =>
  client
    .getAllTickers()
    .then(async (tickers: Ticker[]) =>
      tickers instanceof Array
        ? tickers
            .sort((a, b) => b.quotes.USD.price - a.quotes.USD.price)
            .map(({ id, name, rank, symbol, quotes, last_updated }) => ({
              id,
              name,
              rank,
              symbol,
              lastUpdated: last_updated,
              price: quotes.USD.price,
              percent: quotes.USD.percent_change_24h,
              chartUrl: `http://graphs.coinpaprika.com/currency/chart/${id}/24h/chart.svg`,
              logoUrl: `http://static.coinpaprika.com/coin/${id}/logo.png`,
            }))
        : new Error('Cannot fetch tickers'),
    )
    .catch((error: never) => error)

export default client
