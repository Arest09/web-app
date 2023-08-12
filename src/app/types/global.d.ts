//явно определяем тип который должен импортироваться(import classes ...)
//TS не знает, что делать с CSS файлами. Компилятору неоткуда брать типизацию для них.

declare module "*.scss" {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames
  export = classNames
}
