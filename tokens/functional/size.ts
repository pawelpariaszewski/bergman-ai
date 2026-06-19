import { scale } from '../primitives/scale';

export const size = {
  '0': scale[0],
  '12': scale[1],
  '25': scale[2],
  '50': scale[4],
  '75': scale[6],
  '100': scale[8],
  '150': scale[12],
  '200': scale[16],
  '300': scale[24],
  '350': scale[20],
  '400': scale[32],
  '600': scale[48],
  '700': scale[56],
  '800': scale[64],
  '1000': scale[80],
  '1200': scale[96],
  '1400': scale[112],
  '1500': scale[120],
  '1800': scale[144],
  '2000': scale[160],
  '2100': scale[168],
  '3000': scale[240],
  '4000': scale[320],
  '4500': scale[360],
  '6000': scale[480],
  '8000': scale[640],
  '9000': scale[720],
  '12000': scale[960],
  full: scale.full,
} as const;

export type Size = typeof size;
export type SizeToken = keyof Size;
