import { useEffect, useState } from 'react'

import { CheckCircledIcon, CrossCircledIcon } from '@radix-ui/react-icons'
import { clsx } from 'clsx'

import c from './alertSnackbar.module.scss'

type ErrorSnackbarType = {
  variant: 'success' | 'error'
  message: any
}

export const AlertSnackbar = ({ variant, message }: ErrorSnackbarType) => {
  const [isOpen, setIsOpen] = useState(!!message)
  const classes = {
    toastBlock: clsx(isOpen ? `${c.toastBox} ${c.isOpen}` : c.toastBox),
    iconBlock: clsx(c.iconBlock, c[variant]),
  }

  useEffect(() => {
    setIsOpen(message && true)
    const timeout = setTimeout(() => {
      setIsOpen(false)
    }, 4000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className={classes.toastBlock}>
      <div className={classes.iconBlock}>
        {variant === 'success' ? (
          <CheckCircledIcon width="40" height="40" />
        ) : (
          <CrossCircledIcon width="40" height="40" />
        )}
      </div>
      <div className={c.messageBlock}>{message.message}</div>
    </div>
  )
}
