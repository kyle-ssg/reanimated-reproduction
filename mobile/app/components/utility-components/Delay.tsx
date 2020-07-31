import React, { FunctionComponent, ReactNode, useState } from 'react'; // we need this to make JSX compile

type ComponentType = {
  delay?:number;
  children: ReactNode;
}

const Delay: FunctionComponent<ComponentType> = ({ children, delay=500 }) => {
    const [isReady, setIsReady] = useState<boolean>(false);
    setTimeout(()=>{
        setIsReady(true)
    },delay)
    return <>{isReady? children:null}</>
};

export default Delay;
