import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { WiredImage as _WiredImage } from 'wired-elements/lib/wired-image.js';

export const WiredImage = createComponent({
  react: React,
  tagName: 'wired-image',
  elementClass: _WiredImage
});
