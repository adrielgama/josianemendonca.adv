import React from 'react'

import { cn } from '@/lib/utils'

import { Button as BtnComponent } from '../ui/button'

interface ButtonProps {
  className?: string
}

export const Button: React.FC<ButtonProps> = ({ className }) => {
  return (
    <a href="#contact">
      <BtnComponent
        className={cn(
          'mt-4 max-w-[170px] bg-wine600 p-4 text-center text-xs text-white hover:bg-wine400',
          className
        )}
      >
        Entrar em contato
      </BtnComponent>
    </a>
  )
}
