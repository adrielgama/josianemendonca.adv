import React from 'react'

import { Slide } from 'react-awesome-reveal'

import Background from '@/assets/bg_home.webp'
import PersonImage from '@/assets/portrait.webp'
import { Button } from '@/components/Button/button'

export const Home = () => {
  return (
    <div className="relative h-screen bg-gradient-to-br from-gold to-gold-gradient">
      <div
        className="absolute left-0 top-0 h-full w-full bg-cover bg-fixed bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${Background})`,
          opacity: 0.05,
        }}
      ></div>
      <div className="container">
        <Slide cascade triggerOnce direction="left">
          <div className="relative z-10 flex h-screen justify-center md:flex-row md:justify-between">
            <div className="flex flex-col items-center justify-center gap-4 p-4 md:flex-row">
              <div className="mt-14 flex flex-col gap-4 md:mt-36 lg:mt-48">
                <h1 className="text-4xl font-bold text-wine400">
                  Josiane Mendonça
                </h1>
                <p className="text-sm font-normal text-wine400 md:text-xs lg:text-sm">
                  Graduada em Direito pelo Centro Universitário Regional da
                  Bahia - UNIRB; Advogada inscrita nos quadros da OAB/BA sob o
                  nº 65.347, atuante na seara Trabalhista e Previdenciária desde
                  2019; atualmente Conciliadora no Tribunal de Justiça do Estado
                  da Bahia, presta consultoria e assessoria para pessoas físicas
                  e jurídicas igualmente em Direito Civil, Direito das Famílias
                  e Sucessões, Direito do Consumidor em todo o território
                  nacional, dispõe de importantes parcerias nas mais diversas
                  áreas jurídicas, o que viabiliza o atendimento integral ao
                  cliente garantindo agilidade de atendimento através de
                  serviços de consulta virtual ou presencial pautada sempre na
                  ética e na busca por justiça.
                </p>
                <div className="hidden lg:block">
                  <Button />
                </div>
              </div>
              <img
                src={PersonImage}
                alt="Person"
                className="-mb-4 hidden object-cover md:block md:w-1/2 md:self-end lg:max-w-md"
              />
            </div>
          </div>
        </Slide>
      </div>
    </div>
  )
}
