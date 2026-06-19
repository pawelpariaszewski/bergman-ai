import { letterSpacing as letterSpacingPrimitive } from '../primitives/font';

export const letterSpacing = {
  xsm: letterSpacingPrimitive[12],
  sm: letterSpacingPrimitive[13],
  md: letterSpacingPrimitive[14],
  lg: letterSpacingPrimitive[16],
} as const;

export type LetterSpacing = typeof letterSpacing;
export type LetterSpacingToken = keyof LetterSpacing;
