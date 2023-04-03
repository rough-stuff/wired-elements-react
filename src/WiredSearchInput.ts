import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { WiredSearchInput as CE } from 'wired-elements/lib/wired-search-input.js';

export const WiredSearchInput = createComponent({
  react: React,
  tagName: 'wired-search-input',
  elementClass: CE,
  events: {
    onChange: 'input',
    onchange: 'input'
  }
});
