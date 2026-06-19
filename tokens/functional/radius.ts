import { scale } from '../primitives/scale';

export const radius = {
  '25': scale[2],
  '50': scale[4],
  '75': scale[6],
  '100': scale[8],
  '125': scale[10],
  '200': scale[16],
  '300': scale[24],
  none: scale[0],
  full: scale[1000],
} as const;

export type Radius = typeof radius;
export type RadiusToken = keyof Radius;
