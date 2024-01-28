export const fileToImage = (data: File, callback: (value: string) => void) => {
  const reader = new FileReader()

  reader.onloadend = () => {
    const base64 = reader.result as string

    callback(base64)
  }
  reader.readAsDataURL(data)
}
