import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const Default: StoryObj<typeof Button> = {}

export const Larger: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
    children: 'BigButton',
  },
}
