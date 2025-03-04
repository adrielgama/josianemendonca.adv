import React from 'react'

import Image from 'next/image'

import { Form } from './contact-form'

export default function Contact() {
  return (
    <div
      id="contact"
      className="container mx-auto !space-y-16 bg-white p-4 pt-20"
    >
      <h1 className="text-josiane-wine-400 mb-4 text-3xl font-bold">
        Entre em contato
      </h1>

      <div className="flex flex-col md:container lg:container lg:flex-row lg:justify-evenly">
        <OpeningHours />
        <Form />
      </div>
    </div>
  )
}

const OpeningHours = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-josiane-gold-400 pb-2 text-center text-base font-bold">
        Entre em contato a qualquer momento
      </h1>
      <div className="flex flex-col gap-10">
        <div>
          <h2 className="text-josiane-wine-400 text-base font-medium">
            Horário de atendimento
          </h2>
          <p className="text-josiane-gold-400/90 text-sm font-medium">
            Segunda - Sexta 09:00-17:30
          </p>
        </div>
        <div>
          <h2 className="text-josiane-wine-400 text-base font-medium">
            E-mail
          </h2>
          <a
            href="malito:josianemendonca.adv@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-josiane-gold-400/90 text-sm font-medium"
          >
            josianemendonca.adv@gmail.com
          </a>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div>
            <h2 className="text-josiane-wine-400 text-base font-medium">
              Celular / Whatsapp
            </h2>
            <a
              href="https://wa.me/5574981020822"
              target="_blank"
              rel="noopener noreferrer"
              className="text-josiane-gold-400/90 text-sm font-medium"
            >
              (74) 9 8102-0822
            </a>
          </div>
          <Image
            src="/images/QR_code.svg"
            alt="QR Code whatsapp"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  )
}
