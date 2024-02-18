import { useEffect, useState } from 'react'

import { CheckCircledIcon, CrossCircledIcon } from '@radix-ui/react-icons'
import { clsx } from 'clsx'

import { appActions } from '../../state/appReducer/appReducer.ts'
import { useAppDispatch } from '../../store/store.ts'

import c from './alertSnackbar.module.scss'

type ErrorSnackbarType = {
  variant: 'success' | 'error'
  message: any
}

export const AlertSnackbar = ({ variant, message }: ErrorSnackbarType) => {
  const [isOpen, setIsOpen] = useState(!!message)
  const dispatch = useAppDispatch()
  const classes = {
    toastBlock: clsx(isOpen ? `${c.toastBox} ${c.isOpen}` : c.toastBox),
    iconBlock: clsx(c.iconBlock, c[variant]),
  }

  useEffect(() => {
    setIsOpen(message && true)
    dispatch(appActions.setMessage({ message: message })) //new
    const timeout = setTimeout(() => {
      setIsOpen(false)
      dispatch(appActions.setMessage({ message: '' }))
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
