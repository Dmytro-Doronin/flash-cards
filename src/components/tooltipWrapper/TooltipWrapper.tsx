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
      <ProfileAvatar variant={'tooltip'} image={data?.avatar} callback={setIsVisible} />
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
