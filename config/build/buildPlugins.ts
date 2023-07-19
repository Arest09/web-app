import HtmlWebpackPlugin from "html-webpack-plugin"
import webpack from "webpack"
import { BuildOptions } from "./types/congif"

export function buildPlugins({ paths }: BuildOptions): webpack.WebpackPluginInstance[] {
  return [new HtmlWebpackPlugin({ template: paths.html }), new webpack.ProgressPlugin()]
}
