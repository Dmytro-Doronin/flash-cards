import { useEffect } from 'react'

import { useLatest } from './useLatest.tsx'

export const useOutsideClick = (elementRef: any, handler: () => void, attached = true) => {
  const latestHandler = useLatest(handler)

  useEffect(() => {
    if (!attached) return

    const handleClick = (ev: any) => {
      if (!elementRef.current) return
      if (!elementRef.current.contains(ev.target)) {
        latestHandler.current()
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [elementRef, latestHandler, attached])
}
