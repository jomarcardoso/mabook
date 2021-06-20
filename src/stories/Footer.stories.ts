// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { FooterComponent } from 'src/app/footer/footer.component';

export default {
  title: 'Example/FooterComponent',
  component: FooterComponent,
} as Meta;

const Template: Story<FooterComponent> = (args: FooterComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {};

