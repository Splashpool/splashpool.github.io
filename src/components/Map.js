import map from "../map.png"; // relative path to image
import React from "react";

function Map() {
  return (
    <div className="App">
      <img src={map} alt={"map"} />
    </div>
  );
}

export default Map;
