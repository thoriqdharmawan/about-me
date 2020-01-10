import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import userImage from "../assets/photo/user.jpg";
import "../App.css";

const FlippedCard = ({ flippedCard, user }) => {
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  React.useEffect(() => {
    setFlipped(flippedCard);
  });

  return (
    <div className="card-flip" onClick={() => setFlipped(!flipped)}>
      <animated.div
        className="c back"
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
      >
        <h5 className="card-header">Kartu Tanda Pengunjung</h5>
        <div className="row">
          <div className="col-sm-4 img-user">
            <img src={userImage} alt="user" />
          </div>
          <div className="col-sm-8">
            <h6 className="card-name">{user.name}</h6>
          </div>
        </div>
      </animated.div>
      <animated.div
        className="c front"
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`)
        }}
      >
        <h6 className="card-email">{user.email}</h6>
      </animated.div>
    </div>
  );
};

export default FlippedCard;
