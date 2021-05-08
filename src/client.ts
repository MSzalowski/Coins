import CoinpaprikaAPI from '@coinpaprika/api-nodejs-client'
import { FormattedTicker, Ticker } from 'models'

const client = new CoinpaprikaAPI()

client
  .getAllTickers()
  .then((tickers: Ticker[]) => tickers)
  .catch((error: never) => error)

export const fetchTickers = async (
  chunkSize = 100,
  lastIndex = 0,
): Promise<FormattedTicker[]> =>
  client
    .getAllTickers()
    .then((tickers: Ticker[]) =>
      tickers
        .slice(lastIndex, chunkSize)
        .sort((a, b) => b.quotes.USD.price - a.quotes.USD.price)
        .map(({ id, name, rank, symbol, quotes, last_updated }) => ({
          id,
          name,
          rank,
          symbol,
          lastUpdated: last_updated,
          percent: quotes.USD.percent_change_24h,
        })),
    )
    .catch((error: never) => error)

export default client
