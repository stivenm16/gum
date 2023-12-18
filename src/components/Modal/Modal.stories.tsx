import { Meta, StoryObj } from '@storybook/react'
import Modal from './Modal'

const meta: Meta = {
  title: 'Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    intent: 'primary',
    children: 'Test',
  },
}
