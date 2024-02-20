import { type BuildOptions } from './types/congif'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

export function buildDevServer (options: BuildOptions): DevServerConfiguration {
  return {
    port: 3000,
    open: true,
    historyApiFallback: true,
    hot: true,
    client: {
      // disable the overlay for warnings in a React app
      overlay: {
        runtimeErrors: false
      }
    }
  }
}
