module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.(jpg|png|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 25000
					}
				}
			},
			{
				test: /\.ttf$/,
				loader: 'file-loader'
			},
			{
				test: /\.css?$/,
				use: [ 'style-loader', 'css-loader' ]
			}
		]
	}
};
