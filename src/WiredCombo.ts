import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { WiredCombo as _WiredCombo } from 'wired-elements/lib/wired-combo.js';

export const WiredCombo = createComponent({
  react: React,
  tagName: 'wired-combo',
  elementClass: _WiredCombo,
  events: {
    onselected: 'selected'
  }
});
