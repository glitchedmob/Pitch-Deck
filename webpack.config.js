const {resolve} = require('path');

module.exports = {
	context: resolve('src'),
	entry: [
		'./ts/deck.ts',
		'./sass/deck.scss',
		'./pug/index.pug'
	],
	devtool: "source-map",
	output: {
		filename: 'deck.js',
		path: resolve('public/js'),
		publicPath: "public/"
	},
	resolve: {
    extensions: ['.ts']
  },
	module: {
		loaders: [
			{
				test: /\.eot(\?\S*)?$/,
				loader: 'url-loader?limit=100000&mimetype=application/vnd.ms-fontobject'
			},
			{
				test: /\.woff2(\?\S*)?$/,
				loader: 'url-loader?limit=100000&mimetype=application/font-woff2'
			},
			{
				test: /\.woff(\?\S*)?$/,
				loader: 'url-loader?limit=100000&mimetype=application/font-woff'
			},
			{
				test: /\.ttf(\?\S*)?$/,
				loader: 'url-loader?limit=100000&mimetype=application/font-ttf'
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: "file-loader"
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url-loader?limit=10000&mimetype=image/svg+xml"
			},
			{ test: /\.pug?/,
				use: [
					{ 
						loader: 'file-loader',
						options: { name: '../[name].html' }
					},
					{ loader: 'pug-html-loader',
						options: { pretty: true }
					}
				]
			},
			{ test: /\.scss$/,
				use: [
					{
						loader: 'file-loader',
						options: {name: '../css/[name].css'}
					},
					{ loader: 'extract-loader' },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' }
				]
			},
			{ test: /\.ts$/, loaders: ['ts-loader'], exclude: /node_modules/ },
		]
	}
}