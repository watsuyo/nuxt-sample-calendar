const path = require('path');

module.exports = {
	stories: ['../src/components/**/*.story.(ts)'],
	addons: ['@storybook/addon-actions', '@storybook/addon-links'],
	webpackFinal: async (config) => {
		config.resolve ={
			extensions: ['ts', '.js', '.vue', '.json'],
			alias: {
				'vue$': 'vue/dist/vue.esm.js',
				'assets': path.resolve('path/to/assets'),
				'~': path.resolve(__dirname, '../src/')
			}
		}

		config.module.rules.push({
			test: /\.scss$/,
			use: [
				{
					loader: 'style-loader',
				},
				{
					loader: 'css-loader',
					options: {
						sourceMap: true,
					},
				},
				{
					loader: 'saas-loader',
				},
				{
					loader: "sass-resources-loader",
					options: {
						resources: [
							path.resolve(__dirname, '../src/assets/styles/_variables.styl')
						]
					}
				}
			],
			include: path.resolve(__dirname, '../src/'),
		});

		config.module.rules.push({
			test: /\.ts?$/,
			use: [
				{
					loader: 'ts-loader',
					options: {
						// url: false,
						transpileOnly: true
					}
				}
			]
		});

		return config;
	},
}
