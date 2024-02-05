import React from 'react'

import { Slide } from 'react-awesome-reveal'

import PersonImage from '@/assets/portrait.webp'
import { Button } from '@/components/Button/button'

export const Home = () => {
  return (
    <div className="relative h-screen bg-gradient-to-br from-zinc-950 to-black">
      <div className="container">
        <Slide cascade triggerOnce direction="left">
          <div className="relative z-10 flex h-screen justify-center md:flex-row md:justify-between">
            <div className="flex flex-col items-center justify-center gap-4 p-4 md:flex-row">
              <div className="mt-14 flex flex-col gap-4 md:mt-36 lg:mt-48">
                <h1 className="text-4xl font-bold text-white md:text-5xl">
                  Josiane Mendonça
                </h1>
                <p className="text-justify text-sm font-normal text-gray-400 lg:text-base">
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
                  <Button className="bg-slate-100 text-wine600 hover:bg-wine100" />
                </div>
              </div>
              <img
                src={PersonImage}
                alt="Person"
                className="-mb-4 hidden scale-x-[-1] transform object-cover md:w-1/2 md:self-end lg:block lg:max-w-md"
              />
            </div>
          </div>
        </Slide>
      </div>
    </div>
  )
}
