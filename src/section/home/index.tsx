import React from "react";
import { Button } from "@/components/Button/button";

import style from "./styles.module.css";

export const Home = () => {
  return (
    <div className="mt-[88px] pb-6 bg-gold bg-bgHome bg-no-repeat bg-cover bg-scroll bg-opacity-95">
      <div className="container p-4 flex flex-col gap-4">
        <h1 className={style.title}>Seu futuro, nossa especialidade</h1>
        <p className={style.subtitle}>
          Resolva todos os seus problemas jurídicos de maneira fácil e
          eficiente.
        </p>
        <Button text="Entrar em contato" hasArrow />
      </div>
    </div>
  );
};
