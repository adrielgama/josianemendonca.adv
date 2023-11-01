import React from 'react'

import QRCode from '@/assets/QR_code.svg'

import styles from './styles.module.css'

export const OpeningHours = () => {
  return (
    <div className="flex flex-col gap-4 mt-6 container">
      <h1 className={styles.title_h2}>Entre em contato a qualquer momento</h1>
      <div className="flex flex-col gap-10">
        <div>
          <h2 className={styles.subtitle}>Horário de atendimento</h2>
          <p className={styles.text}>Segunda - Sexta 09:00-17:00</p>
        </div>
        <div>
          <h2 className={styles.subtitle}>E-mail</h2>
          <a
            href="malito:josianemendonca.adv@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.text}
          >
            josianemendonca.adv@gmail.com
          </a>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div>
            <h2 className={styles.subtitle}>Celular / Whatsapp</h2>
            <a
              href="https://wa.me/5574981020822"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.text}
            >
              (74) 9 8102-0822
            </a>
          </div>
          <img src={QRCode} alt="QR Code whatsapp" />
        </div>
      </div>
    </div>
  )
}
