import path from "path"
import webpack from "webpack"
import { buildWebpackconfig } from "./config/build/buildWebpackconfig"
import { BuildEnv, BuildPaths } from "./config/build/types/congif"

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    build: path.resolve(__dirname, "build"),
    entry: path.resolve(__dirname, "src", "index.ts"),
    html: path.resolve(__dirname, "public", "index.html"),
  }
  console.log(env, "env")
  const mode = env.mode || "development"
  const PORT = env.port || 3000
  
  const isDev = mode === "development"
  console.log(mode)

  const config: webpack.Configuration = buildWebpackconfig({ mode: mode, paths, isDev, port: PORT })
  return config
}
