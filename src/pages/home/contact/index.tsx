import React from 'react'

import { Slide, Reveal } from 'react-awesome-reveal'

import { Form } from './form'
import { OpeningHours } from './openingHours'
import styles from './styles.module.css'

export const Contact = () => {
  return (
    <div id="contact" className="container bg-white p-4 pt-20">
      <Reveal cascade triggerOnce>
        <h1 className={styles.title}>Entre em contato</h1>

        <div className="flex flex-col md:container lg:container lg:flex-row lg:justify-evenly">
          <Slide triggerOnce>
            <OpeningHours />
          </Slide>
          <Slide triggerOnce>
            <Form />
          </Slide>
        </div>
      </Reveal>
    </div>
  )
}
