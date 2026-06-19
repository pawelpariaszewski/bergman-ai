import { lineHeight as lineHeightPrimitive } from '../primitives/font';

export const lineHeight = {
  sm: lineHeightPrimitive[16],
  md: lineHeightPrimitive[20],
} as const;

export type LineHeight = typeof lineHeight;
export type LineHeightToken = keyof LineHeight;
