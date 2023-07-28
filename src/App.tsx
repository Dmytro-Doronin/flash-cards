import './App.css'
import { Button } from './components/ui/button'
import Card from './components/ui/card/Card'
import { TextField } from './components/ui/textField/TextField.tsx'

export function App() {
  return (
    <div>
      <Button variant={'primary'}>asdasd</Button>
      <Button variant={'secondary'}>asdasd</Button>
      <Button variant={'tertiary'}>asdasd</Button>
      <Button variant={'link'}>asdasd</Button>
      <Card />
      <TextField placeholder={'placeholder'} />
    </div>
  )
}
