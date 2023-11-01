import React from 'react'

import { Button as BtnComponent } from '../ui/button'

export const Button = () => {
  return (
    <BtnComponent className="bg-gradient-to-r from-wine400 to-wine600 mt-4 rounded-full text-center text-white p-4 text-xs max-w-[170px]">
      Entrar em contato
    </BtnComponent>
  )
}
