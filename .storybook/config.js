import { addDecorator, addParameters } from '@storybook/react';
import { withCssResources } from '@storybook/addon-cssresources';
import { withInfo } from '@storybook/addon-info';
import '@storybook/addon-console';
import { withConsole } from '@storybook/addon-console';
import centered from '@storybook/addon-centered/react';

addParameters({
  cssresources: [
    {
      id: `dark`,
      code: `<link rel="stylesheet" href="/themes/theme-dark-94707885.css">`,
      picked: false,
    },
    {
      id: `light`,
      code: `<link rel="stylesheet" href="/themes/theme-light-28881820.css">`,
      picked: true,
    },
  ],
});

addDecorator(withCssResources);
addDecorator(withInfo);
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(centered);
