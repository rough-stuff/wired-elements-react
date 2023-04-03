import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { WiredFab as _WiredFab } from 'wired-elements/lib/wired-fab.js';

export const WiredFab = createComponent({
  react: React,
  tagName: 'wired-fab',
  elementClass: _WiredFab
});
