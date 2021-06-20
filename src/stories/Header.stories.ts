import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import { SearchComponent } from '../app/search/search.component';
import { HeaderComponent } from '../app/header/header.component';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';

export default {
  title: 'Example/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      providers: [AuthService, AngularFirestore, AngularFireAuth, Router, NgZone],
      declarations: [SearchComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  props: args,
  moduleMetadata: {
    imports: [CommonModule],
    declarations: [SearchComponent],
    providers: [AuthService, AngularFirestore, AngularFireAuth, Router, NgZone],
  }
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
