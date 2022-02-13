import { ComponentStory } from '@storybook/react-native'
import Button, {
  ButtonLink,
  ButtonOutlinePrimary,
  ButtonSecondary,
  ButtonTertiary,
  ButtonText,
} from 'components/base/forms/Button'
export default {
  title: 'Button',
  component: Button,
}

export const Default: ComponentStory<typeof Button> = (
  args: typeof Default.args,
) => (
  <>
    <Button {...args} style={Styles.mb5}>
      {args.children}
    </Button>
    <ButtonTertiary {...args} style={Styles.mb5}>
      {args.children}
    </ButtonTertiary>
    <ButtonText {...args} style={Styles.mb5}>
      {args.children}
    </ButtonText>
    <ButtonLink {...args} style={Styles.mb5}>
      {args.children}
    </ButtonLink>
    <ButtonOutlinePrimary {...args} style={Styles.mb5}>
      {args.children}
    </ButtonOutlinePrimary>
    <ButtonSecondary {...args} style={Styles.mb5}>
      {args.children}
    </ButtonSecondary>
  </>
)

Default.args = {
  disabled: false,
  children: 'Message',
}
