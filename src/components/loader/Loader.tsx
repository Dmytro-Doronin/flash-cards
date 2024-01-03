import { clsx } from 'clsx'
import { Circles } from 'react-loader-spinner'

import c from './loader.module.scss'

type LoaderType = {
  variant: 'main' | 'secondary'
}
export const Loader = ({ variant }: LoaderType) => {
  const classes = {
    loader: clsx(variant === 'main' ? c.mainLoader : c.secondaryLoader),
  }

  const height = variant === 'main' ? '80' : '40'
  const width = variant === 'main' ? '80' : '40'

  return (
    <div className={classes.loader}>
      <Circles height={height} width={width} color="#8C61FFFF" ariaLabel="loading"></Circles>
    </div>
  )
}
