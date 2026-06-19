export const grey = {
  0: '#FFFFFF',
  100: '#F2F2F2',
  200: '#E1E1E1',
  300: '#CCCCCC',
  400: '#ADADAD',
  500: '#999999',
  600: '#919191',
  700: '#757575',
  800: '#333333',
  900: '#000000',
} as const;

export type GreyScale = typeof grey;
export type GreyToken = keyof GreyScale;
