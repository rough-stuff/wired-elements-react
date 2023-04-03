import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { WiredButton as _WiredButton } from 'wired-elements/lib/wired-button.js';

export const WiredButton = createComponent({
  react: React,
  tagName: 'wired-button',
  elementClass: _WiredButton
});
