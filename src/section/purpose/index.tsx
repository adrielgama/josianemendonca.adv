import React from 'react'

import { Slide } from 'react-awesome-reveal'

import { Button } from '@/components/Button/button'

import styles from './styles.module.css'

export const Purpose = () => {
  return (
    <div
      id="purpose"
      className="container p-4 flex flex-col items-center py-20"
    >
      <Slide triggerOnce direction="right">
        <h1 className={styles.title}>O propósito</h1>
        <p className={styles.subtitle}>
          Proporcionamos uma representação jurídica personalizada para cada
          cliente, abrangendo todas as áreas do direito. Nossa missão é oferecer
          soluções eficazes e orientação compassiva, defendendo seus interesses
          com total dedicação para alcançar resultados consistentes e
          duradouros. Independentemente do desafio legal que você enfrente,
          nosso compromisso é assegurar que seus direitos sejam protegidos,
          proporcionando a assistência legal competente e ética que você merece.
        </p>
        <Button />
      </Slide>
    </div>
  )
}
