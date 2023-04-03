import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { WiredRadioGroup as CE } from 'wired-elements/lib/wired-radio-group.js';

export const WiredRadioGroup = createComponent({
  react: React,
  tagName: 'wired-radio-group',
  elementClass: CE,
  events: {
    onselected: 'selected'
  }
});
