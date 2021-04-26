import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { WiredListbox as CE } from 'wired-elements/lib/wired-listbox.js';

export const WiredListbox = createComponent(React, 'wired-listbox', CE, {
  onselected: 'selected'
});