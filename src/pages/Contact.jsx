import React, { useState } from "react";
import "../App.css";
import FlippedCard from "../utils/FlippedCard";

const Contact = () => {
  const [flipped, setFlipped] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: ""
  });

  const handleChangeName = e => {
    setFlipped(false);
    setUser({
      ...user,
      name: [e.target.value]
    });
  };
  const handleChangeEmail = e => {
    setFlipped(true);
    setUser({
      ...user,
      email: [e.target.value]
    });
  };

  return (
    <div className="row">
      <div className="col-sm mt-4">
        <div className="form-group">
          <h5 className="center mb-3 header-card-input">
            SILAHKAN MASUKAN DATA ANDA
          </h5>
          <label className="label">Your Name</label>
          <input
            className="form-control"
            name="name"
            value={user.name}
            type="text"
            aria-describedby="emailHelp"
            onClick={() => setFlipped(false)}
            onChange={handleChangeName}
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label className="label">Your Email</label>
          <input
            className="form-control"
            name="email"
            value={user.email}
            type="text"
            onChange={handleChangeEmail}
            onClick={() => setFlipped(true)}
            autoComplete="off"
          />
        </div>
      </div>
      <div className="col-sm">
        <FlippedCard flippedCard={flipped} user={user} />
      </div>
    </div>
  );
};

export default Contact;
