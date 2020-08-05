import { useCallback, useState } from "react";

export const useMeasure = (initialCb?: (size) => void): any => {
  const [size, setSize] = useState(null);

  const onLayout = useCallback((event) => {
    const newSize = event.nativeEvent.layout;
    if (size === null) {
      initialCb && initialCb(newSize);
    }
    setSize(newSize);
  }, []);

  return [size, onLayout];
};
