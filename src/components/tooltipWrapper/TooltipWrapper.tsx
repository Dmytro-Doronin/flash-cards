import { useRef, useState } from 'react'

import { useMeQuery } from '../../services/auth/auth.service.ts'
import { ProfileAvatar } from '../profileAvatar/ProfileAvatar.tsx'
import { Tooltip } from '../tooltip/Tooltip.tsx'

import c from './tooltipWrapper.module.scss'

export const TooltipWrapper = () => {
  const { data } = useMeQuery()
  const tooltipRef = useRef(null)
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const changeTooltipVisible = () => {
    setIsVisible(false)
  }

  return (
    <div ref={tooltipRef} className={c.profileContent}>
      <div className={c.headerProfileBlock}>
        <span className={c.name}>{data?.name}</span>
        <ProfileAvatar variant={'tooltip'} image={data?.avatar} callback={setIsVisible} />
      </div>

      <Tooltip
        tooltipRef={tooltipRef}
        isVisible={isVisible}
        isInformation={true}
        callback={changeTooltipVisible}
        avatar={data?.avatar}
        name={data?.name}
        email={data?.email}
      />
    </div>
  )
}
