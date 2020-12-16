import React from 'react'
import Input from './index.js'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

export default { title: 'Input', decorators: [withKnobs] }

export const inputField = () => {
	const disabled = boolean('Disabled?', false);
	const invalid = boolean('Invalid?', false);
    return <Input 
        name="first-name"
        placeholder="Enter first name"
        invalid={invalid}
        disabled={disabled} />
}