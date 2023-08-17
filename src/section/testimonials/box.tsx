import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import styles from "./styles.module.css";

interface BoxProps {
  image: string;
  name: string;
  testimonial: string;
}

export const Box: React.FC<BoxProps> = ({ image, name, testimonial }) => {
  return (
    <div>
      <div className={styles.box}>
        <p className={styles.box_text}>{testimonial}</p>

        <p className={styles.box_name}>{name}</p>
      </div>
      <Avatar className="relative left-[84vw] bottom-6 border-2 border-wine100">
        <AvatarImage src={image} alt={`${name}- Profile Foto`} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};
