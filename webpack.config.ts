import path from "path"
import HtmlWebpackPlugin from "html-webpack-plugin"
import webpack from "webpack"
import { buildWebpackconfig } from "./config/build/buildWebpackconfig"
import { BuildPaths } from "./config/build/types/congif"

const paths: BuildPaths = {
  build: path.resolve(__dirname, "build"),
  entry: path.resolve(__dirname, "src", "index.ts"),
  html: path.resolve(__dirname, "public", "index.html"),
}

const mode = "development"

const isDev = mode === "development"

const config: webpack.Configuration = buildWebpackconfig({ mode: "development", paths, isDev })

export default config
