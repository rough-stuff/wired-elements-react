import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { WiredRadio as CE } from 'wired-elements/lib/wired-radio.js';

export const WiredRadio = createComponent({
  react: React,
  tagName: 'wired-radio',
  elementClass: CE,
  events: {
    onchange: 'change',
    onChange: 'change'
  }
});
