import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { WiredLink as _WiredLink } from 'wired-elements/lib/wired-link.js';

export const WiredLink = createComponent({
  react: React,
  tagName: 'wired-link',
  elementClass: _WiredLink
});
