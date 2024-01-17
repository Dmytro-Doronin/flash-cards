import EditIcon from '../../assets/icons/Edit.tsx'
import PlayIcon from '../../assets/icons/PlayIcon.tsx'
import TrashIcon from '../../assets/icons/Trash.tsx'

import c from './controlPanel.module.scss'


export const ControlPanel = () => {
  return (
    <div className={c.wrapper}>
      <PlayIcon className={c.icon} />
      <EditIcon className={c.icon} />
      <TrashIcon className={c.icon} />
    </div>
  )
}
