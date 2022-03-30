import React from "react";
//styling
import "./MustContainItem.css";

const MustContainItem = (props) => {
  const { data } = props;
  const label = data[0];
  const meetsReq = data[1];

  const setClass = () => {
    const classArr = ["invalidStyle"]; //invalid logo img
    if (meetsReq) classArr.push("validStyle"); //valid logo img
    return classArr.join(" ");
  };

  return (
    <div>
      <div className={"validateChecklist"}>
        <span>{label}</span>
        <div className={setClass()} />
      </div>
    </div>
  );
};

export default MustContainItem;
