import path from "path"
import { buildLoaders } from "./buildLoaders"
import { buildResolver } from "./buildResolver"
import { BuildOptions } from "./types/congif"
import webpack from "webpack"
import { buildPlugins } from "./buildPlugins"
import { buildDevServer } from "./buildDevServer"

export function buildWebpackconfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths, isDev } = options
  return {
    mode: mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolver(),
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    devServer: isDev ? buildDevServer(options) : undefined,
    devtool: isDev ? "inline-source-map" : undefined,
  }
}
