import { Meta, StoryObj } from '@storybook/react'
import Input from './Input'

const meta: Meta = {
  title: 'Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    intent: 'primary',
    // size: 'small',
  },
}
