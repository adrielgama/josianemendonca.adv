import React from "react";
import { Form } from "./form";
import { OpeningHours } from "./openingHours";

import styles from "./styles.module.css";

export const Contact = () => {
  return (
    <div id="contact" className="container p-4 bg-white pt-20">
      <h1 className={styles.title}>Entre em contato</h1>

      <Form />
      <OpeningHours />
    </div>
  );
};
