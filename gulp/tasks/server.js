export const server = (done) => {
	app.plugins.browsersync.init({
		server: {
			// index: "main.html" если название основного файла отлично от index.html,
			// в противном случае оставить
			index: "index.html",
			// 
			baseDir: `${app.path.build.html}`
		},
		notify: false,
		port: 3000,
	});
}