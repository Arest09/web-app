import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildCssLoader( isDev : Boolean) {
  return {
    test: /\.(sa|sc|c)ss$/,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resourcePath: string) => resourcePath.includes(".module."),
            localIdentName: isDev ? "[path][name]__[local]--[hash:base64:8]" : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  }
}
