import React, { FunctionComponent, ReactNode, useEffect, useState } from 'react'; // we need this to make JSX compile

type ComponentType = {
  delay?: number;
  children: ReactNode;
};

const Delay: FunctionComponent<ComponentType> = ({ children, delay = 500 }) => {
  const [isReady, setIsReady] = useState<boolean>(!delay);
  useEffect(()=>{
    if (delay) {
      setTimeout(() => {
        setIsReady(true);
      }, delay);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return <>{isReady ? children : null}</>;
};

export default Delay;
