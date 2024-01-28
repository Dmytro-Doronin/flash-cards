import { ComponentPropsWithoutRef, ReactNode } from 'react'

import * as ModalPrimitive from '@radix-ui/react-dialog'

import Close from '../../../assets/icons/Close.tsx'
import { Typography } from '../typography'

import c from './modal.module.scss'

export type ModalType = {
  title?: string
  onOpenChange: (open: boolean) => void
  open: boolean
  children: ReactNode
} & Omit<ComponentPropsWithoutRef<typeof ModalPrimitive.Dialog>, 'onOpenChange' | 'open'>

export const Modal = ({ title, children, ...restProp }: ModalType) => {
  return (
    <ModalPrimitive.Root {...restProp}>
      <ModalPrimitive.Portal>
        <ModalPrimitive.Overlay className={c.overlay} />
        <ModalPrimitive.Content className={c.content}>
          <div className={c.header}>
            <ModalPrimitive.Title asChild>
              <Typography as="h2" variant="h2">
                {title}
              </Typography>
            </ModalPrimitive.Title>
            <ModalPrimitive.Close className={c.close}>
              <Close />
            </ModalPrimitive.Close>
          </div>
          {children}
        </ModalPrimitive.Content>
      </ModalPrimitive.Portal>
    </ModalPrimitive.Root>
  )
}
