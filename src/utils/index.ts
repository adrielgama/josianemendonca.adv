export function stripHTML(htmlString: string) {
  const div = document.createElement('div')
  div.innerHTML = htmlString
  return div.innerText
}

export function truncateString(str: string, num: number) {
  if (str.length <= num) {
    return str
  }
  return str.slice(0, num) + '...'
}

export function formatDate(dataISO: string) {
  const data = new Date(dataISO)
  const DD = String(data.getDate()).padStart(2, '0')
  const MM = String(data.getMonth() + 1).padStart(2, '0')
  const YYYY = data.getFullYear()

  return `${DD}/${MM}/${YYYY}`
}
