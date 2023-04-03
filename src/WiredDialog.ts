import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { WiredDialog as _WiredDialog } from 'wired-elements/lib/wired-dialog.js';

export const WiredDialog = createComponent({
  react: React,
  tagName: 'wired-dialog',
  elementClass: _WiredDialog
});
