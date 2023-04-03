import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { WiredSlider as CE } from 'wired-elements/lib/wired-slider.js';

export const WiredSlider = createComponent({
  react: React,
  tagName: 'wired-slider',
  elementClass: CE,
  events: {
    onchange: 'change',
    onChange: 'change'
  }
});
