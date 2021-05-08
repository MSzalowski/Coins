import { FormattedTicker } from 'models'
import React from 'react'
import * as client from '../../client'

type Action =
  | { type: 'FETCH_TICKERS' }
  | { type: 'FETCH_TICKERS_SUCCESS'; payload: { tickers: FormattedTicker[] } }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | { type: 'FETCH_TICKERS_FAILURE'; payload: any }
type Dispatch = (action: Action) => void

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type State = { loading: boolean; error: any; tickers?: FormattedTicker[] }
type CoinsProviderProps = { children: React.ReactNode }

const CoinsContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined)

// TODO: Instead of spreading state on each action it would be better to use immer
const coinsReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'FETCH_TICKERS': {
      return { ...state, loading: true }
    }
    case 'FETCH_TICKERS_SUCCESS': {
      return {
        ...state,
        loading: false,
        tickers: [
          ...(state.tickers ? state.tickers : []),
          ...action.payload.tickers,
        ],
      }
    }
    case 'FETCH_TICKERS_FAILURE': {
      return { ...state, loading: false, error: action.payload }
    }
    default: {
      throw new Error('Unhandled action type')
    }
  }
}

const CoinsProvider = ({ children }: CoinsProviderProps) => {
  const [state, dispatch] = React.useReducer(coinsReducer, {
    loading: false,
    error: null,
  })
  const value = { state, dispatch }
  return <CoinsContext.Provider value={value}>{children}</CoinsContext.Provider>
}

const useCoins = () => {
  const context = React.useContext(CoinsContext)
  if (context === undefined) {
    throw new Error('useCoins must be used within a CoinsProvider')
  }
  return context
}

const fetchTickers = async (
  dispatch: Dispatch,
  lastIndex = 0,
  chunkSize = 100,
) => {
  dispatch({ type: 'FETCH_TICKERS' })
  try {
    const tickers = await client.fetchTickers(chunkSize, lastIndex)
    dispatch({ type: 'FETCH_TICKERS_SUCCESS', payload: { tickers } })
  } catch (error) {
    dispatch({ type: 'FETCH_TICKERS_FAILURE', payload: { error } })
  }
}

export { CoinsProvider, useCoins, fetchTickers }
