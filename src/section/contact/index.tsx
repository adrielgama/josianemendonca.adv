import React from "react";
import { Form } from "./form";
import { OpeningHours } from "./openingHours";

import { Slide, Reveal } from "react-awesome-reveal";

import styles from "./styles.module.css";

export const Contact = () => {
  return (
    <div id="contact" className="container p-4 bg-white pt-20">
      <Reveal cascade triggerOnce>
        <h1 className={styles.title}>Entre em contato</h1>

        <Slide triggerOnce>
          <OpeningHours />
        </Slide>
        <Slide triggerOnce>
          <Form />
        </Slide>
      </Reveal>
    </div>
  );
};
