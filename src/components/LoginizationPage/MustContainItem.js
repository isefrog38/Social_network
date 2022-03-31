import React from "react";

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
    <span style={{fontWeight: "500", fontSize: "1rem"}}>
      <div className={"validateChecklist"}>
        <span >{label}</span>
        <div className={setClass()} />
      </div>
    </span>
  );
};

export default MustContainItem;
