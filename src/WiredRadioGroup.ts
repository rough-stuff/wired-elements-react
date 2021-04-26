import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { WiredRadioGroup as CE } from 'wired-elements/lib/wired-radio-group.js';

export const WiredRadioGroup = createComponent(React, 'wired-radio-group', CE, {
  onselected: 'selected'
});