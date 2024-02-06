import { Typography } from '../ui/typography'

import c from './ansQue.module.scss'

type AnsQueType = {
  headerText: string
  text: string
  img?: string
}

export const AnsQue = ({ headerText, text, img }: AnsQueType) => {
  return (
    <div>
      <Typography className={c.mainText} variant="h3">
        {headerText}: <span className={c.text}>{text}</span>
      </Typography>
      <div className={c.imgWrapper}>
        <img className={c.img} src={img} alt="pictute" />
      </div>
    </div>
  )
}
