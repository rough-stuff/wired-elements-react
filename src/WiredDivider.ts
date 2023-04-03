import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { WiredDivider as _WiredDivider } from 'wired-elements/lib/wired-divider.js';

export const WiredDivider = createComponent({
  react: React,
  tagName: 'wired-divider',
  elementClass: _WiredDivider
});
