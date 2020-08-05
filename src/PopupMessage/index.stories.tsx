import { withCssResources } from '@storybook/addon-cssresources';
import * as React from 'react';
import PopupMessageComponent from './index';
import { withKnobs, text, select } from '@storybook/addon-knobs';

export default {
  title: 'PopupMessage component',
  decorators: [withKnobs, withCssResources],
};

export const Popup = () => {
  const message = text('Text', 'Popup message component!');
  const label = 'type';
  const options = {
    Success: 'success',
    Info: 'info',
    Danger: 'danger',
  };
  const defaultValue = 'info';

  const type = select(label, options, defaultValue);

  // @ts-ignore
  return <PopupMessageComponent title={message} type={type} />;
};

export const PopupWithChildren = () => {
  const message = text('Text', 'Popup message component!');
  const label = 'type';
  const options = {
    Success: 'success',
    Info: 'info',
    Danger: 'danger',
  };
  const defaultValue = 'info';

  const type = select(label, options, defaultValue);

  return (
    // @ts-ignore
    <PopupMessageComponent title={message} type={type}>
      <div>Children</div>
    </PopupMessageComponent>
  );
};
