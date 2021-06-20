// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Post } from 'src/types';
import { CardComponent } from '../app/card/card.component';

export default {
  title: 'Example/Card',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
      providers: [AuthService]
    }),
  ],
} as Meta;

const Template: Story<CardComponent> = (args: CardComponent) => ({
  props: args,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
      providers: [AuthService]
    }),
  ],
});

const post: Post = {
  categories: [],
  content: 'Corpo da notícia.',
  date: new Date(),
  imageUrl: {
    alt: '',
    src: 'https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.2986962:1599737161/Shakira.jpg?f=16x9&h=720&q=0.8&w=1280&$p$f$h$q$w=aefd084',
  },
  stars: 1,
  title: 'Título',
  votes: 2,
}

export const Primary = Template.bind({});
Primary.args = { post };
