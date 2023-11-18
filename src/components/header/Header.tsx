// import { ProfileContent } from '../profileContent/ProfileContent.tsx'

import c from '../../App.module.scss'
import { Button } from '../ui/button'

import s from './header.module.scss'

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={c.container}>
        <div className={s.headerInner}>
          {/*<ProfileContent />*/}
          <Button>
            <a style={{ textDecoration: 'none', color: 'white'}} href="#">
              Sign Up
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
