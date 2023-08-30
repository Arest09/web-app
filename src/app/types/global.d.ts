// явно определяем тип который должен импортироваться(import classes ...)
// TS не знает, что делать с CSS файлами. Компилятору неоткуда брать типизацию для них.

declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames
  export = classNames
}

// аналогично для svg
declare module '*.svg' {
  import type React from 'react'
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>
  export default SVG
}
declare module '*.png'
declare module '*.jpg'

declare const __IS__DEV: boolean
