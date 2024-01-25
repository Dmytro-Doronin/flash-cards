import { FC } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

// import { Tab } from '../../../services/decks/decks.types.ts'
import { Typography } from '../typography'

import c from './tabs.module.scss'

type TabsType = {
  value: string
  text: string
  disabled?: boolean
}

type TabSwitcherPropsType = {
  label: string
  tabs: TabsType[]
  onValueChange?: (item: string) => void
  value: string
}
//tab

export const TabSwitcher: FC<TabSwitcherPropsType> = ({ tabs, label, value, onValueChange }) => {
  return (
    <div className={c.container}>
      <label className={c.span}>
        <Typography variant={'body2'}>{label}</Typography>
      </label>
      <Tabs.Root onValueChange={onValueChange} value={value} defaultValue={tabs[1].text}>
        <Tabs.List>
          {tabs.map((tab, i) => (
            <Tabs.Trigger className={c.trigger} key={i} {...tab}>
              <Typography variant={'body2'}>{tab.text}</Typography>
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {/*<Tabs.Content value="tab1">tab1</Tabs.Content>*/}
        {/*<Tabs.Content value="tab2">tab2</Tabs.Content>*/}
        {/*<Tabs.Content value="tab3">tab3</Tabs.Content>*/}
      </Tabs.Root>
    </div>
  )
}

