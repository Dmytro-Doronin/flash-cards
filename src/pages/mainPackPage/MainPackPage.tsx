import { Button } from '../../components/ui/button'

import { Typography } from '../../components/ui/typography'

import c from './mainPackPage.module.scss'
import { TextField } from "../../components/ui/textField";
import TabSwitcher from "../../components/ui/tabs/TabSwitcher.tsx";
import SliderRange from '../../components/ui/slider/SliderRange.tsx'

const tabs = [
  {
    value: 'My Cards',
    text: 'My Cards',
  },
  {
    value: 'All Cards',
    text: 'All Cards',
  },
]

export const MainPackPage = () => {
  return (
    <div className={c.page}>
      <div className={c.container}>
        <div className={c.inner}>
          <div className={c.controlBlock}>
            <div className={c.headerControl}>
              <Typography variant="large">Packs list</Typography>
              <Button variant="primary">Add New Pack</Button>
            </div>
            <div className={c.control}>
              <TextField containerProps={c.search} placeholder="Input search" />
              <TabSwitcher label="Show packs cards" tabs={tabs} />
              <SliderRange label="Number of cards" />
              <Button variant="secondary">Clear Filter</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
