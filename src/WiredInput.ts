import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { WiredInput as _WiredInput } from 'wired-elements/lib/wired-input.js';

export const WiredInput = createComponent({
  react: React,
  tagName: 'wired-input',
  elementClass: _WiredInput,
  events: {
    onChange: 'input',
    onchange: 'input'
  }
});
