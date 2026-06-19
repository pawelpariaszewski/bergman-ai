import { color as colorPrimitive } from '../primitives/colors/color';

export const color = {
  bg: {
    primary: colorPrimitive.grey[0],
    primaryInverse: colorPrimitive.grey[900],
  },
} as const;

export type Color = typeof color;
export type ColorBgToken = keyof Color['bg'];
