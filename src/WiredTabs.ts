import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { WiredTabs as CE } from 'wired-elements/lib/wired-tabs.js';

export const WiredTabs = createComponent({
  react: React,
  tagName: 'wired-tabs',
  elementClass: CE
});
