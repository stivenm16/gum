import { Meta, StoryObj } from '@storybook/react'
import Input from './Input' // Import your custom Input component

// Define meta information for the Input component
const meta: Meta = {
  title: 'Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof meta>
// Define the Template for your Input component
// const Template: Story = (args) => <Input {...args} />

// Create a Primary story for your Input component
// export const Primary = Template.bind({})
// Primary.args = {
//   placeholder: 'Enter text...',
//   // Add any default props or values you want to showcase
// }
export const Primary: Story = {
  args: {
    intent: 'primary',
  },
}
