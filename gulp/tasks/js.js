import webpack from "webpack-stream";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const js = () => {
	return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev, allowEmpty: true })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "JS",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(webpack({
			mode: app.isBuild ? 'production' : 'development',
			plugins: [new MiniCssExtractPlugin()],
			module: {
				rules: [
					{
						test: /\.(scss|css)$/,
						use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader'],
					},
					{
						test: /\.svg$/,
						loader: 'svg-inline-loader'
					},
				],
			},
			output: {
				filename: 'app.min.js',
			}
		}))
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browsersync.stream());
}