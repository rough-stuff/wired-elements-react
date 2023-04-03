import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { WiredToggle as CE } from 'wired-elements/lib/wired-toggle.js';

export const WiredToggle = createComponent({
  react: React,
  tagName: 'wired-toggle',
  elementClass: CE,
  events: {
    onchange: 'change',
    onChange: 'change'
  }
});
