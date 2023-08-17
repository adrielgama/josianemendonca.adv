import React from "react";
import { Box } from "./box";
import styles from "./styles.module.css";

import AdrielProfilePhoto from "@/assets/clients/adriel.jpg";
import MaryProfilePhoto from "@/assets/clients/mary.jpg";
import JonProfilePhoto from "@/assets/clients/jon.jpg";

export const Testimonials = () => {
  const Testimonials = [
    {
      name: "João da Luz",
      testimonial:
        "O advogado demonstrou habilidades excepcionais ao resolver meu caso com eficiência e precisão, garantindo resultados favoráveis.",
      profilePhoto: AdrielProfilePhoto,
    },
    {
      name: "Pedro Santos",
      testimonial:
        "Com dedicação e conhecimento, o advogado superou minhas expectativas, conquistando um desfecho favorável para meu caso.",
      profilePhoto: JonProfilePhoto,
    },
    {
      name: "Vancélia Silva",
      testimonial:
        "Gratidão ao advogado pela sua atuação brilhante, conduzindo meu caso com maestria e alcançando resultados extraordinários.",
      profilePhoto: MaryProfilePhoto,
    },
  ];

  return (
    <div id="testimonials" className="container p-4 bg-wine600 py-20">
      <h1 className={styles.title}>Depoimentos</h1>

      <div className="flex flex-col gap-4 mt-6">
        {Testimonials.map(({ name, profilePhoto, testimonial }) => (
          <Box
            image={profilePhoto}
            name={name}
            testimonial={testimonial}
            key={name}
          />
        ))}
      </div>
    </div>
  );
};
