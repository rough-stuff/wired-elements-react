import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { WiredTextarea as CE } from 'wired-elements/lib/wired-textarea.js';

export const WiredTextarea = createComponent({
  react: React,
  tagName: 'wired-textarea',
  elementClass: CE,
  events: {
    onChange: 'input',
    onchange: 'input'
  }
});
