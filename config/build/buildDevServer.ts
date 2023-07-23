import { BuildOptions } from "./types/congif"
import type { Configuration as DevServerConfiguration } from "webpack-dev-server"
import type { Configuration } from "webpack"

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port:options.port,
    open:true,
  }
}
