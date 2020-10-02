// import React, { Component } from "react";
import React, { useState } from 'react';
import Flex from "../base/grid/Flex";

interface Gif {
  src?: string,
  pausedSrc?: string,
}

const Gif = ({ pausedSrc, src, ...props }) => {
  const [isPaused, setIsPaused] = useState(true)
  return (
      <Flex
        onClick={()=>setIsPaused(!isPaused)}
        className={`centered-container gif ${isPaused ? "paused" : "playing"}`}
      >
          <img
            {...props}
            alt="Pause"
            src={isPaused ? pausedSrc : src}
          />
          {/* I'm not sure what should do with this.
          <ion className="ion ion-ios-play" /> */}
      </Flex>
  )
}


//I'm not sure what should do with this.
// global.Gif = Gif;

Gif.displayName = "Gif";
export default Gif;
