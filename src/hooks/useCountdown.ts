import { useContext } from 'react'

import { CountdownContext } from '../contexts/CountdownContext/indext'
import { CountdownContextProps } from '../contexts/CountdownContext/types'

const useCountdown = (): CountdownContextProps => {
  const context = useContext(CountdownContext)

  return context
}

export default useCountdown
