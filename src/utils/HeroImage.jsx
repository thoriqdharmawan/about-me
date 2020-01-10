import React from "react";
import Chat from "../assets/svg/chat-wrap.svg";
import Daun from "../assets/svg/daun.svg";
import Orang from "../assets/svg/orang.svg";
import { useSpring, animated } from "react-spring";
import "../App.css";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px, ${y / 10}px, 0)`;
const trans2 = (x, y) => `translate3d(${x / 8}px, ${y / 8}px, 0)`;
const trans3 = (x, y) => `translate3d(${x / 6}px, ${y / 6}px, 0)`;

const HeroImage = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }));
  return (
    <div
      className="hero-wrap"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.img
        src={Daun}
        className="hero-image-chat img1"
        style={{ transform: props.xy.interpolate(trans1) }}
      />
      <animated.img
        src={Orang}
        className="hero-image-chat img2"
        style={{ transform: props.xy.interpolate(trans2) }}
      />
      <animated.img
        src={Chat}
        className="hero-image-chat img3"
        style={{ transform: props.xy.interpolate(trans3) }}
      />
      {/* <animated.img
        src={Daun}
        className="hero-image-chat img4"
        style={{ transform: props.xy.interpolate(trans4) }}
      /> */}

      {/* <div className="hero-image-chat"></div> */}
      {/* <Hero /> */}
    </div>
  );
};

export default HeroImage;
