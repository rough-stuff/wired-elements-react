import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { WiredCheckbox as _WiredCheckbox } from 'wired-elements/lib/wired-checkbox.js';

export const WiredCheckbox = createComponent(React, 'wired-checkbox', _WiredCheckbox, {
  onchange: 'change',
  onChange: 'change'
});
