type Mods = Record<string, boolean | string>

export const classNames = (cls: string, mods: Mods = {}, additional: string[] = []): string => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([key, value]) => {
        return Boolean(value)
      })
      .map(([key, value]) => {
        return key
      })
  ].join(' ')
}