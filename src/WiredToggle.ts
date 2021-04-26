import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { WiredToggle as CE } from 'wired-elements/lib/wired-toggle.js';

export const WiredToggle = createComponent(React, 'wired-toggle', CE, {
  onchange: 'change',
  onChange: 'change'
});