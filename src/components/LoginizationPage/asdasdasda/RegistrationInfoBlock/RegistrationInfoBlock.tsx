import React from "react";
import s from "./RegistrationInfoBlock.module.css";
import BackgroundPhoto from "../../../images/RegistrationImages/RegistrationBackgroung.png";

function RegistrationInfoBlock() {
  const RegistrationBackgroundImgStyle = {
    backgroundImage: `url(${BackgroundPhoto})`,
  };

  return (
    <div style={RegistrationBackgroundImgStyle} className={s.infoBlock}>
      <span>
        Стань частью благотворительности и начни помогать другим прямо сейчас
      </span>
    </div>
  );
}

export default RegistrationInfoBlock;
