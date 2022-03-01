// eslint-disable-next-line @typescript-eslint/no-empty-interface
export type Res = {
  startup: { locale: string }
  user: { id: string; locale: string }
  setLocale: { value: string }
  // END OF TYPES
}
