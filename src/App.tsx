import './App.module.scss'
import { Header } from './components/header/Header.tsx'
import { SignUpPage } from './pages/signUpPage/SignUpPage.tsx'
import { Loader } from "./components/loader/Loader.tsx";
export function App() {
  return (
    <div>
      <Header />
      <SignUpPage />
      <Loader/>
    </div>
  )
}
