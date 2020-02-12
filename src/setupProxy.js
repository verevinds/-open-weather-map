const proxy = require('http-proxy-middleware')

module.exports = function(app) {
	app.use(
		proxy('/graphql', {
			target: 'http://127.0.0.1:4000',
			secure: false,
			changeOrigin: true
		})
	)
}
