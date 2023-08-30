import type webpack from 'webpack'
import { BuildOptions, type BuildPaths } from './types/congif'

export function buildResolver (options: BuildPaths): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {
      '@': (options.src)
    }
  }
}
