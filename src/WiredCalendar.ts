import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { WiredCalendar as CE } from 'wired-elements/lib/wired-calendar.js';

export const WiredCalendar = createComponent({
  react: React,
  tagName: 'wired-calendar',
  elementClass: CE
});
