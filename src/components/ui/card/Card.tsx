import { FC, ReactNode } from 'react'
import { clsx } from "clsx";

import s from './card.module.scss'


type CardType = {
  className?: string
  children?: ReactNode[]
}

export const Card: FC<CardType> = ({ className, ...children }) => {
  
  const classes = {
    root: clsx(s.card, className),
  }

  return <div className={classes.root} {...children}></div>
}

export default Card
