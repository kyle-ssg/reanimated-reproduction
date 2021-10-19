import { useState } from 'react'
import { LayoutRectangle } from 'react-native'

export const useMeasure = (
  initialCb?: (size) => void,
): [LayoutRectangle, (event: any) => void] => {
  const [size, setSize] = useState<LayoutRectangle>({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  })

  const onLayout = (event) => {
    const newSize = event.nativeEvent.layout
    if (size.width === 0) {
      initialCb && initialCb(newSize)
    }
    setSize(newSize)
  }

  return [size, onLayout]
}
