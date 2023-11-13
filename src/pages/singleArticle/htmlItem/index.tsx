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
      className="custom-html-content"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  )
}
