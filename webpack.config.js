module.exports = {
	entry: "./public/js/index.js", //This code will be compiled
	output: {
		filename: "public/bundle.js" //Then output into this file
	},

	devtool: 'source-map',

	module: { //This will be what we do
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel",
				query: {
					presets: ["react", "es2015"] //These are the specific transformations we'll be using
				}
			}
		]
	}
}