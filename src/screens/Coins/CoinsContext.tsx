import { FormattedTicker } from 'models'
import React from 'react'

type Action =
  | { type: 'FETCH_TICKERS'; payload: { lastIndex: number; chunkSize: number } }
  | { type: 'FETCH_TICKERS_SUCCESS'; payload: { tickers: FormattedTicker[] } }
  | { type: 'FETCH_TICKERS_FAILURE'; payload: never }
type Dispatch = (action: Action) => void
type State = { loading: boolean; error: unknown; tickers?: FormattedTicker[] }
type CoinsProviderProps = { children: React.ReactNode }

const CoinsContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined)

const coinsReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'FETCH_TICKERS': {
      return { ...state, loading: true }
    }
    case 'FETCH_TICKERS_SUCCESS': {
      return { ...state, loading: false, tickers: action.payload.tickers }
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
function useCoins() {
  const context = React.useContext(CoinsContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context
}
export { CoinsProvider, useCoins }
