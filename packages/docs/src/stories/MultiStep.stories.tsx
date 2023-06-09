import { Meta, StoryObj } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@ignite-ui/react'

export default {
  title: 'Form/MultiStep',
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return <Box>{Story()}</Box>
    },
  ],
} as Meta<MultiStepProps>

export const Default: StoryObj<MultiStepProps> = {}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
