import webpack from 'webpack'


export function buildDefinePlugin(isDev:boolean) {
  return new webpack.DefinePlugin({
    __IS__DEV: JSON.stringify(isDev),
  })
}
