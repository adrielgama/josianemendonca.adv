import React from 'react'

import Reveal, { Fade, Slide } from 'react-awesome-reveal'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import styles from './styles.module.css'

interface BoxProps {
  image: string
  name: string
  testimonial: string
}

export const Box: React.FC<BoxProps> = ({ image, name, testimonial }) => {
  return (
    <div className="mb-8 max-w-xs">
      <Reveal triggerOnce cascade>
        <div className={styles.box}>
          <Slide triggerOnce>
            <p className={styles.box_text}>{testimonial}</p>
          </Slide>
          <Reveal triggerOnce>
            <p className={styles.box_name}>{name}</p>
          </Reveal>
        </div>
        <Fade triggerOnce>
          <Avatar className="absolute -bottom-4 -right-4 border-2 border-wine100">
            <AvatarImage src={image} alt={`${name}- Profile Foto`} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Fade>
      </Reveal>
    </div>
  )
}
