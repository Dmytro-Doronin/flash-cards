import { FC } from 'react'

import * as Tabs from '@radix-ui/react-tabs'

import { Typography } from '../typography'

type TabsType = {
  value: string
  text: string
  disabled?: boolean
}

type TabSwitcherPropsType = {
  label: string
  tabs: TabsType[]
}

export const TabSwitcher: FC<TabSwitcherPropsType> = ({ tabs, label }) => {
  return (
    <>
      <label>
        <Typography variant={'body2'}>{label}</Typography>
      </label>
      <Tabs.Root defaultValue={'tab1'}>
        <Tabs.List>
          {tabs.map((tab, i) => (
            <Tabs.Trigger key={i} {...tab}>
              <Typography variant={'body2'}>{tab.text}</Typography>
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        <Tabs.Content value={'tab1'}>tab1</Tabs.Content>
      </Tabs.Root>
    </>
  )
}

export default TabSwitcher
