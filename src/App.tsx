import './App.css'
import { LoginForm } from './components/auth/login-form/Login-form.tsx'
// import { RadioGroup } from './components/ui/radioGroup/RadioGroupComponent.tsx'

// import { TabSwitcher } from './components/ui/tabs/TabSwitcher.tsx'

export function App() {
  // const Options = [
  //   { value: 'tab1', label: 'switcher1' },
  //   { value: 'tab2', label: 'switcher2' },
  //   { value: 'tab3', label: 'switcher3' },
  // ]

  return (
    <div>
      {/*<TabSwitcher label={'tab switcher'} tabs={TabSwitchers} />*/}
      <LoginForm />
      {/*<RadioGroup options={Options} />*/}
    </div>
  )
}
