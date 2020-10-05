import React from 'react'
import Button from './index.js'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

export default { title: 'Buttons', decorators: [withKnobs] }

export const primaryButton = () => {
	const message = text('Text', 'Primary')
	const disabled = boolean('Disabled?', false)
	const isSmall = boolean('Small button?', false)
	return <Button size={isSmall ? 'small': 'default'} disabled={disabled}>{message}</Button>
}

export const secondaryButton = () => {
	const message = text('Text', 'Secondary')
	const disabled = boolean('Disabled?', false)
	const isSmall = boolean('Small button?', false)
	return <Button kind={'secondary'} size={isSmall ? 'small': 'default'} disabled={disabled}>{message}</Button>
}
