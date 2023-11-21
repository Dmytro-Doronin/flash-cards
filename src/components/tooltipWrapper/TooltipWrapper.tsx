import { useRef, useState } from 'react'

import avatar from '../../assets/images/IMG_0390.jpg'
import { ProfileAvatar } from '../profileAvatar/ProfileAvatar.tsx'
import { Tooltip } from '../tooltip/Tooltip.tsx'

import c from './tooltipWrapper.module.scss'

export const TooltipWrapper = () => {
  const tooltipRef = useRef(null)
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const changeTooltipVisible = () => {
    setIsVisible(false)
  }

  return (
    <div ref={tooltipRef} className={c.profileContent}>
      <ProfileAvatar image={avatar} callback={setIsVisible} />
      <Tooltip
        tooltipRef={tooltipRef}
        isVisible={isVisible}
        isInformation={true}
        callback={changeTooltipVisible}
      />
    </div>
  )
}
