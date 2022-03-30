import React from "react";
import s from "./Registration.module.css";
import RegistrationInfoBlock from "./RegistrationInfoBlock/RegistrationInfoBlock";
import {RegistrationForm} from "../Exemple";

export const Registration = () => {
  return (
    <div className={s.registrationBlock}>
      <RegistrationForm />
      <RegistrationInfoBlock />
    </div>
  );
};
