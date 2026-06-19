import { scale } from '../primitives/scale';

export const space = {
  '0': scale[0],
  '12': scale[1],
  '25': scale[2],
  '50': scale[4],
  '75': scale[6],
  '100': scale[8],
  '150': scale[12],
  '200': scale[16],
  '250': scale[20],
  '300': scale[24],
} as const;

export type Space = typeof space;
export type SpaceToken = keyof Space;
