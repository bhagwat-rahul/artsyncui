import React from "react";
import Frame34145 from "../Frame34145";
import "./Frame34204.css";

function Frame34204(props) {
  const { dashboard, group11, className } = props;

  return (
    <div className={`frame-34204-1 ${className || ""}`}>
      <img className="dashboard" src={dashboard} />
      <Frame34145 />
      <div className="overlap-group">
        <img className="properties" src="/img/properties-5@2x.png" />
      </div>
      <img className="group-13" src="/img/group-13-5@2x.png" />
      <img className="group-11" src={group11} />
      <img className="collections" src="/img/collections-8@2x.png" />
    </div>
  );
}

export default Frame34204;
