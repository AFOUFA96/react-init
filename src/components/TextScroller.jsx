import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from "react-spring";

export function TextScroller(props){
    const {text} = props;
    const [key, setKey] = useState(1);

    const scrolling = useSpring({
        from: { transform: "translate(200%,0)" },
        to: { transform: "translate(-200%,0)" },
        config: { duration: 20000 },
        reset: true,
        //reverse: key % 2 == 0,
        onRest: () => {
            setKey(key + 1);
        }
    });

    return (
        <div className='myMesg' key={key}>
            <animated.div style={scrolling}>{text}</animated.div>
            <animated.div style={scrolling}>{text}</animated.div>
            {/* <animated.div style={scrolling}>{text}</animated.div> */}
        </div>
    );
};