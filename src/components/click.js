import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

/*
0 % { transform: scale(1); }
25 % { transform: scale(.97); }
35 % { transform: scale(.9); }
45 % { transform: scale(1.1); }
55 % { transform: scale(.9); }
65 % { transform: scale(1.1); }
75 % { transform: scale(1.03); }
100 % { transform: scale(1); }
`*/

function Click({ foo, click }) {
  const { x } = useSpring({
    from: { x: 0 },
    x: click ? 1 : 0,
    config: { duration: 1000 },
  });
  return (
    // <div onClick={() => toggle(!state)}>
    <div className="click-btn" onClick={() => foo()}>
      <animated.div
        style={{
          color: "coral",
          opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
          transform: x
            .interpolate({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
            })
            .interpolate((x) => `scale(${x})`),
        }}
      >
        click
      </animated.div>
    </div>
  );
}

export default Click;
