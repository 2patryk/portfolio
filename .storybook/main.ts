import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["./../components/**/*.stories.@(js|jsx|ts|tsx|mdx)"],

  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
  webpackFinal: async config => {
    const imageRule = config.module?.rules?.find(rule => {
      const test = (rule as { test: RegExp }).test

      if (!test) {
        return false
      }

      return test.test('.svg')
    }) as { [key: string]: any }

    imageRule.exclude = /\.svg$/

    config.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    return config
  }
};
export default config;
