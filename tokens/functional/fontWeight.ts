import { fontWeight as fontWeightPrimitive } from '../primitives/font';

export const fontWeight = {
  regular: fontWeightPrimitive[400],
} as const;

export type FontWeight = typeof fontWeight;
export type FontWeightToken = keyof FontWeight;
