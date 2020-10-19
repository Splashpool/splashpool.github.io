import React from "react";
import image from "../assets/images/loading.svg";
const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
  

const Loading = () => (
  <div style={style}>
      <img src={image} alt="Loading..." />
  </div>
);

export default Loading;
