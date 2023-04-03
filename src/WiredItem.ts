import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { WiredItem as _WiredItem } from 'wired-elements/lib/wired-item.js';

export const WiredItem = createComponent({
  react: React,
  tagName: 'wired-item',
  elementClass: _WiredItem
});
