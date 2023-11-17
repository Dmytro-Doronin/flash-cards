import './App.module.scss'
import { Provider } from 'react-redux'

import { Router } from './route/router.tsx'
import { store } from './store/store.ts'
export function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}
