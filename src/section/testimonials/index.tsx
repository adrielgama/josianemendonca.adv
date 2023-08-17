import React from "react";
import AdrielProfilePhoto from "@/assets/clients/adriel.png";
import styles from "./styles.module.css";

export const Testimonials = () => {
  //   const Testimonials = [
  //     {
  //       name: "Adriel Gama",
  //       testimonial:
  //         "O advogado demonstrou habilidades excepcionais ao resolver meu caso com eficiência e precisão, garantindo resultados favoráveis.",
  //       profilePhoto: "",
  //     },
  //     {
  //       name: "Abimael Santos",
  //       testimonial:
  //         "Com dedicação e conhecimento, o advogado superou minhas expectativas, conquistando um desfecho favorável para meu caso.",
  //       profilePhoto: "",
  //     },
  //     {
  //       name: "Adriano Sena",
  //       testimonial:
  //         "Gratidão ao advogado pela sua atuação brilhante, conduzindo meu caso com maestria e alcançando resultados extraordinários.",
  //       profilePhoto: "",
  //     },
  //   ];
  return (
    <div className="container p-4 bg-wine600">
      <h1 className={styles.title}>Depoimentos</h1>

      <div>
        <img className={styles.profile} src={AdrielProfilePhoto} alt={"Adriel Gama - Profile Foto"} />
        <div className={styles.box}>
          <p className={styles.box_text}>
            "Com dedicação e conhecimento, o advogado superou minhas
            expectativas, conquistando um desfecho favorável para meu caso."
          </p>

          <p className={styles.box_name}>Adriel Gama</p>
        </div>
      </div>
    </div>
  );
};
