import React from "react";
import { useSpring, animated } from "react-spring";
import "./utils.css";
import foto from "../assets/photo/user.jpg";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
];
const trans = (x, y, s) =>
  `perspective(900px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Galery = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: {
      mass: 5,
      tension: 350,
      friction: 40
    }
  }));
  return (
    <animated.img
      src={foto}
      className="card-utils"
      onMouseMove={({ clientX: x, clientY: y }) =>
        set({
          xys: calc(x, y)
        })
      }
      onMouseLeave={() =>
        set({
          xys: [0, 0, 1]
        })
      }
      style={{
        transform: props.xys.interpolate(trans)
      }}
    />
  );
};

export default Galery;
