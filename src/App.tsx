import './App.module.scss'
import { Header } from './components/header/Header.tsx'
import { SignIn } from './pages/signInPage/SignIn.tsx'

export function App() {
  return (
    <div>
      <Header />
      <SignIn />
    </div>
  )
}
