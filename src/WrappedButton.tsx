import React, { FunctionComponent, ComponentProps } from 'react';
import Button from './Button'

type Props = {
  spacing: number
} & ComponentProps<typeof Button>;
const WrappedButton: FunctionComponent<Props> = ({ spacing, ...buttonProps }) => (
  <div style={{ padding: spacing }}>
    <Button {...buttonProps} />
  </div>
);

WrappedButton.displayName = 'WrappedButton';

export default WrappedButton;
