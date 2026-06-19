import { inter } from '@/utils/font-face.css';

export const font = {
  default: `${inter}, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`,
} as const;

export const fontSize = {
  12: '12px',
  13: '13px',
  14: '14px',
  16: '16px',
} as const;

export const fontWeight = {
  400: '400',
  500: '500',
} as const;

export const letterSpacing = {
  12: '0px',
  13: '-0.039px',
  14: '-0.084px',
  16: '-0.176px',
} as const;

export const lineHeight = {
  16: '16px',
  20: '20px',
} as const;

export interface FontBaseTokens {
  font: typeof font;
  fontSize: typeof fontSize;
  fontWeight: typeof fontWeight;
  letterSpacing: typeof letterSpacing;
  lineHeight: typeof lineHeight;
}
