// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent as Button } from '../app/button/button.component';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

const Template: Story<Button> = (args: Button) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary'
};

export const Success = Template.bind({});
Success.args = {
  color: 'success',
};

export const Danger = Template.bind({});
Danger.args = {
  color: 'danger'
};
