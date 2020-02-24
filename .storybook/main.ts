module.exports = {
	stories: ['../src/components/**/*.story.(ts)'],
	addons: ['@storybook/addon-actions', '@storybook/addon-links'],
	webpackFinal: async (config) => {
		config.module.rules.push({
			test: /\.(ts)$/
		});

		config.resolve.extensions.push('.ts');

		return config;
	},
}
