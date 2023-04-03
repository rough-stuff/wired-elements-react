import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { WiredIconButton as _WiredIconButton } from 'wired-elements/lib/wired-icon-button.js';

export const WiredIconButton = createComponent({
  react: React,
  tagName: 'wired-icon-button',
  elementClass: _WiredIconButton
});
