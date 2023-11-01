import React from 'react'

import { Slide } from 'react-awesome-reveal'

import { Button } from '@/components/Button/button'

export const Home = () => {
  return (
    <div className="mt-[88px] pb-6 bg-bgHome bg-no-repeat bg-cover bg-scroll bg-opacity-[96%]">
      <Slide cascade triggerOnce direction="left">
        <div className="container p-4 flex flex-col gap-4">
          <h1 className="text-wine400 text-4xl font-bold mt-8">
            Seu futuro, nossa especialidade
          </h1>
          <p className="text-sm text-wine400 font-normal mt-4 max-w-[235px]">
            Resolva todos os seus problemas jurídicos de maneira fácil e
            eficiente.
          </p>
          <Button />
        </div>
      </Slide>
    </div>
  )
}
