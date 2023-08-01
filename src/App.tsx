import './App.css'

import { TabSwitcher } from './components/ui/tabs/TabSwitcher.tsx'

export function App() {
  const TabSwitchers = [
    { value: 'tab1', text: 'switcher1', disabled: false },
    { value: 'tab2', text: 'switcher2', disabled: false },
    { value: 'tab3', text: 'switcher3', disabled: false },
  ]

  return (
    <div>
      <TabSwitcher label={'tab switcher'} tabs={TabSwitchers} />
    </div>
  )
}
