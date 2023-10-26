import { buildLoaders } from './buildLoaders'
import { buildResolver } from './buildResolver'
import { type BuildOptions } from './types/congif'
import type webpack from 'webpack'
import { buildPlugins } from './buildPlugins'
import { buildDevServer } from './buildDevServer'

export function buildWebpackconfig (options: BuildOptions): webpack.Configuration {
  const { mode, paths, isDev } = options
  return {
    mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolver(paths),
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      publicPath: '/',
      clean: true
    },
    plugins: buildPlugins(options),
    devServer: isDev ? buildDevServer(options) : undefined,
    devtool: isDev ? 'source-map' : undefined
  }
}
