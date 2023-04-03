import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { WiredCard as _WiredCard } from 'wired-elements/lib/wired-card.js';

export const WiredCard = createComponent({
  tagName: 'wired-card',
  elementClass: _WiredCard,
  react: React,
});
