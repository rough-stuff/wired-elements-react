import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { WiredVideo as CE } from 'wired-elements/lib/wired-video.js';

export const WiredVideo = createComponent({
  react: React,
  tagName: 'wired-video',
  elementClass: CE
});
