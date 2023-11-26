import React from 'react'

import { Button as BtnComponent } from '../ui/button'

export const Button = () => {
  return (
    <a href="#contact">
      <BtnComponent className="mt-4 max-w-[170px] rounded-full bg-gradient-to-r from-wine400 to-wine600 p-4 text-center text-xs text-white">
        Entrar em contato
      </BtnComponent>
    </a>
  )
}
