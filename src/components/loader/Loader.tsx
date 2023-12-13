import { Circles } from 'react-loader-spinner'

import c from './loader.module.scss'

export const Loader = () => {
  return (
    <div className={c.loader}>
      <Circles height="80" width="80" color="#8C61FFFF" ariaLabel="loading"></Circles>
    </div>
  )
}
