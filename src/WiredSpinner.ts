import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { WiredSpinner as CE } from 'wired-elements/lib/wired-spinner.js';

export const WiredSpinner = createComponent({
  react: React,
  tagName: 'wired-spinner',
  elementClass: CE
});
