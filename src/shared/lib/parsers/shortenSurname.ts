export const shortenSurname = (surname: string, at: number) => {
  return surname.charAt(at).toUpperCase() + '.'
}
