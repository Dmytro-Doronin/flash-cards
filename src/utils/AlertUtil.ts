type AlertUtilType = 'avatar' | 'registration'


export const alertUtil = ( variant : AlertUtilType) => {
  switch (variant) {
    case 'avatar':
      return { status: 200, message: 'Avatar was added' }
    case 'registration':
      return { status: 200, message: 'You have been registered' }
  }
}
