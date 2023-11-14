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
            <div className="container mt-48 flex flex-col gap-4 p-4">
              <h1 className="mt-8 text-4xl font-bold text-wine400">
                Seu futuro, nossa especialidade
              </h1>
              <p className="mt-4 max-w-[235px] text-sm font-normal text-wine400">
                Resolva todos os seus problemas jurídicos de maneira fácil e
                eficiente.
              </p>
              <Button />
            </div>
            <img
              src={PersonImage}
              alt="Person"
              className="hidden self-end object-cover md:block md:h-2/3 lg:h-3/4"
            />
          </div>
        </Slide>
      </div>
    </div>
  )
}
