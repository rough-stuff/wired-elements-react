import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { WiredProgress as CE } from 'wired-elements/lib/wired-progress.js';

export const WiredProgress = createComponent({
  react: React,
  tagName: 'wired-progress',
  elementClass: CE
});
