import React from 'react'
import Checkbox from './index.js'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

export default { title: 'Checkbox', decorators: [withKnobs] }

export const checkboxField = () => {
  const disabled = boolean('Disabled?', false);
  const label = text('Label text', '');
  return <Checkbox 
    id="chk-first"
    name="name"
    label={label}
    disabled={disabled} />
}