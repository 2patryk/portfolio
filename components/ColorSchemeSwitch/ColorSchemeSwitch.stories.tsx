import { Meta } from '@storybook/react';
import React from 'react';

import ColorSchemeSwitch, { ColorSchemeSwitchProps } from './ColorSchemeSwitch';

export default {
  title: 'components/ColorSchemeSwitch',
  component: ColorSchemeSwitch,
} as Meta<typeof ColorSchemeSwitch>;

export const Default = (args: ColorSchemeSwitchProps) => <ColorSchemeSwitch {...args} />;

Default.args = {} as ColorSchemeSwitchProps;
