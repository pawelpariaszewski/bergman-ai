import { fontSize as fontSizePrimitive } from '../primitives/font';

export const fontSize = {
  xsm: fontSizePrimitive[12],
  sm: fontSizePrimitive[13],
  md: fontSizePrimitive[14],
  lg: fontSizePrimitive[16],
} as const;

export type FontSize = typeof fontSize;
export type FontSizeToken = keyof FontSize;
