import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { WiredSearchInput as CE } from 'wired-elements/lib/wired-search-input.js';

export const WiredSearchInput = createComponent(React, 'wired-search-input', CE, {
  onChange: 'input',
  onchange: 'input'
});