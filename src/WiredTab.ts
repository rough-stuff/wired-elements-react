import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { WiredTab as CE } from 'wired-elements/lib/wired-tab.js';

export const WiredTab = createComponent({
  react: React,
  tagName: 'wired-tab',
  elementClass: CE
});
