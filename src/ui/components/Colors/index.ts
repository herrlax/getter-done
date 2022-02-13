type Color =
  | 'background'
  | 'darkGrey'
  | 'darkerGrey'
  | 'offWhite'
  | 'white'
  | 'red'
  | 'primary'
  | 'primaryFocus'
  | 'primaryActive'
  | 'secondary'
  | 'secondaryFocus'
  | 'secondaryActive';

export type ColorTheme = Record<Color, string>;

const colors: ColorTheme = {
  background: '#36393F',
  darkGrey: '#101419',
  darkerGrey: '#071116',
  offWhite: '#f5f6f7',
  white: '#ffffff',
  red: '#DE4C4A',
  primary: '#239561',
  primaryFocus: '#43B581',
  primaryActive: '#33A571',
  secondary: '#50545C',
  secondaryFocus: '#70747C',
  secondaryActive: '#60646C'
};

export default colors;
