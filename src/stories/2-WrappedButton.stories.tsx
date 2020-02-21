import React from 'react';
import { action } from '@storybook/addon-actions';
import WrappedButton from '../WrappedButton'

export default {
  title: 'WrappedButton',
  component: WrappedButton,
};

export const Text = () => (
  <WrappedButton
    onClick={action('clicked')}
    spacing={10}
  >
    Hello Button
  </WrappedButton>
);
