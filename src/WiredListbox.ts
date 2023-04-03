import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { WiredListbox as CE } from 'wired-elements/lib/wired-listbox.js';

export const WiredListbox = createComponent({
  react: React,
  tagName: 'wired-listbox',
  elementClass: CE,
  events: {onselected: 'selected'}
});
