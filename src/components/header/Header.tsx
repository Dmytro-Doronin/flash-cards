import c from '../../App.module.scss'
import { ProfileContent } from '../profileContent/ProfileContent.tsx'

import s from './header.module.scss'

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={c.container}>
        <div className={s.headerInner}>
          <ProfileContent />
        </div>
      </div>
    </header>
  )
}
