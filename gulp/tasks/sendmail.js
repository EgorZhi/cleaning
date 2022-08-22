export const sendmail = () => {
	return app.gulp.src(`${app.path.src.sendmail}`, {})
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "SENDMAIL",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(app.gulp.dest(app.path.build.sendmail))
		.pipe(app.plugins.browsersync.stream());
}