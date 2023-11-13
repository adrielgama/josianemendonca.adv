import React from 'react'
import './style.css'

interface CustomHtmlContentProps {
  htmlContent: string
}

export const CustomHtmlContent: React.FC<CustomHtmlContentProps> = ({
  htmlContent,
}) => {
  return (
    <div
      className="custom-html-content max-w-3xl"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  )
}
