import { FC, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './card.module.scss'

type CardType = {
  className?: string
  children: ReactNode
  componentRef: React.MutableRefObject<HTMLDivElement | null>
}

export const Card: FC<CardType> = ({ className, componentRef, ...children }) => {
  const classes = {
    root: clsx(s.card, className),
  }

  return <div ref={componentRef} className={classes.root} {...children}></div>
}
