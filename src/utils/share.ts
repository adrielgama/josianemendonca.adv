export const shareOnLinkedIn = (title: string, currentUrl: string) => {
  const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
    currentUrl
  )}&title=${encodeURIComponent(title)}`
  window.open(linkedInUrl, '_blank', 'width=640,height=660')
}

export const shareOnTwitter = (title: string, currentUrl: string) => {
  const twitterUrl = `https://twitter.com/share?text=${encodeURIComponent(
    title
  )}&url=${encodeURIComponent(currentUrl)}`
  window.open(twitterUrl, '_blank', 'width=640,height=660')
}

export const shareOnWhatsApp = (currentUrl: string) => {
  const whatsAppUrl = `https://wa.me/?text=${encodeURIComponent(
    `${currentUrl}`
  )}`
  window.open(whatsAppUrl, '_blank', 'width=600,height=400')
}
