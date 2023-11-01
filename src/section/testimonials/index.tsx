import React from 'react'

import { TestimonialsMock } from '@/mock/testimonials'

import { Box } from './box'
import styles from './styles.module.css'

export const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className={`container p-4 bg-wine600 py-20 relative ${styles.containerWithBg}`}
    >
      <h1 className={styles.title}>Depoimentos</h1>

      <div className="flex flex-col gap-4 mt-6 items-center">
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
