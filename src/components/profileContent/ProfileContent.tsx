import { useRef, useState } from "react";

import avatar from '../../assets/images/IMG_0390.jpg'
import { ProfileAvatar } from '../profileAvatar/ProfileAvatar.tsx'
import { ProfileTooltip } from '../profileTooltip/ProfileTooltip.tsx'

import c from './profileContent.module.scss'

export const ProfileContent = () => {
  const tooltipRef = useRef(null)
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const changeTooltipVisible = () => {
    setIsVisible(false)
  }

  
  return (
    <div ref={tooltipRef} className={c.profileContent}>
      <ProfileAvatar image={avatar} callback={setIsVisible} />
      <ProfileTooltip refka={tooltipRef} isVisible={isVisible} isInformation={true} callback={changeTooltipVisible} />
    </div>
  )
}
