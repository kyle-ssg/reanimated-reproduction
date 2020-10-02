import { getISODay } from "date-fns";
import React, { useState } from "react";
import Flex from "./grid/Flex";

interface Gif {
  //I didn't have the proptypes for pausedSrc and src
  pausedSrc?: string,
  src?: string,
}

const Gif: React.FC<Gif> = ({ pausedSrc, src, ...props }) => {

  const [isPaused, setIsPaused] = useState(true)

  return (
      <Flex
        onClick={ () => setIsPaused(!isPaused) }
        className={`centered-container gif ${isPaused ? "paused" : "playing"}`}
      >
          <img
            {...props}
            alt="Pause"
            src={ isPaused ? pausedSrc : src }
          />
          {//I'm not sure what should do with this.
          /* <ion className="ion ion-ios-play" /> */}
      </Flex>
  )
};

Gif.displayName = "Gif";
//I'm not sure what should do with this.
// global.Gif = Gif;
export default Gif;
