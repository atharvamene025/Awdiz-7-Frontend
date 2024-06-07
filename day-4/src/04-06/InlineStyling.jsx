import React from "react";
import "./../styles/InlineStyling.css";
const InlineStyling = () => {
  const styles = { color: "purple", fontSize: "40px" };
  return (
    <>
      <div>
        <h1 style={{ color: "green", fontSize: "33  px" }}>Inline Styling</h1>
      </div>
      <div>
        <h1 style={styles}>Inline Styling</h1>
      </div>

      <p className="col-red">Testing Class</p>
      <p id="col-blue">Testing Class</p>
    </>
  );
};

export default InlineStyling;
