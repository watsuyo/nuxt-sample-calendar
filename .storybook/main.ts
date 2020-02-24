const path = require('path');

module.exports = {
	stories: ['../src/components/**/*.story.(ts)'],
	addons: ['@storybook/addon-actions', '@storybook/addon-links'],
	webpackFinal: async (config) => {
		config.module.rules.push({
			test: /\.(ts)$/
		});

		config.resolve.extensions.push('.ts');

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
			],
			include: path.resolve(__dirname, '../src/'),
		});

		return config;
	},
}
