import { AppState } from '../state-type'
import { useSelector } from 'react-redux'

export default (): AppState['theme'] | null => {
  return useSelector((state: AppState) => state.theme)
}
