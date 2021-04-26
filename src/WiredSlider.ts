import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { WiredSlider as CE } from 'wired-elements/lib/wired-slider.js';

export const WiredSlider = createComponent(React, 'wired-slider', CE, {
  onchange: 'change',
  onChange: 'change'
});