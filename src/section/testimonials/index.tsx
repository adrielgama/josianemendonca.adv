import React from 'react'

import { TestimonialsMock } from '@/mock/testimonials'

import { Box } from './box'
import styles from './styles.module.css'

export const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className={`relative w-full bg-wine600 p-4 py-20 ${styles.containerWithBg} md:pt-28`}
    >
      <h1 className={styles.title}>Depoimentos</h1>

      <div className="mt-6 flex flex-col items-center gap-4 md:grid md:grid-cols-1 md:place-items-center lg:grid-cols-2 lg:justify-items-center xl:grid-cols-3 xl:justify-items-center">
        {TestimonialsMock.map(({ name, profilePhoto, testimonial }) => (
          <Box
            image={profilePhoto}
            name={name}
            testimonial={testimonial}
            key={name}
          />
        ))}
      </div>
    </div>
  )
}
