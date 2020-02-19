import React from "react";
import { useTrail, animated } from "react-spring";

export const TextFader = ({ items, isVisible }) => {
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 1000, friction: 200 },
    from: { opacity: 0, x: 0, height: 0 },
    to: { opacity: 1, height: 80, x: 60 }
  });

  return (
    <div className="trails-main">
      {isVisible && (
        <div>
          {trail.map(({ x, height, ...rest }, index) => (
            <animated.div
              key={items[index]}
              className="trails-text"
              style={{
                ...rest,
                transform: x.interpolate(
                  x => `translate3d(${index * 100}px,${x}px,0)`
                )
              }}
            >
              <animated.div style={{ height }}>{items[index]}</animated.div>
            </animated.div>
          ))}
        </div>
      )}
    </div>
  );
};
