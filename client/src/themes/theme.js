const color = {
  transparent: "transparent",
  dark: "#151B11",
  light: "#F8F7F4",
  black: "#040B00",
  white: "#FFFFFC",
  grey_med: "#787B77",
  warning: "#CB2F2F",
  warning_light: "#F5E3E3",
  success: "#466F25",
  success_light: "#E3EBD7",
};

const style = {
  shadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
  textShadow: "0px 4px 15px rgba(0, 0, 0, 1)",
  round: "9999px",
};

const typography = {
  font_fallback: `-apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  "Roboto",
  "Helvetica Neue", Arial, sans-serif,
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  font_primary: `Montserrat`,
  font_secondary: "Lato",
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
};

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "1920px",
  desktopL: "2560px",
};

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktopL})`,
};

const space = {
  0: 0,
  0.25: "0.25rem",
  0.5: "0.5rem",
  0.75: "0.75rem",
  1: "1rem",
  1.25: "1.25rem",
  1.5: "1.5rem",
  1.75: "1.75rem",
  2: "2rem",
  2.5: "2.5rem",
  3: "3rem",
  4: "4rem",
  6: "6rem",
  8: "8rem",
  12: "12rem",
  16: "16rem",
  24: "24rem",
};

const speed = {
  very_fast: "0.2s",
  fast: "0.3s",
  medium: "0.5s",
  slow: "0.7s",
  very_slow: "1s",
};

const transition = {
  transform_veryFast: `transform ${speed.very_fast}`,
  transform_fast: `transform ${speed.fast}`,
  transform_slow: `transform ${speed.slow}`,
};

const width = {
  "w-30%": `30%`,
  "w-1/3": `33.33%`,
  "w-1/4": `25%`,
  "w-1/5": `20%`,
  "w-3/5": `60%`,
};

const theme = {
  color,
  typography,
  style,
  size,
  device,
  space,
  speed,
  transition,
  width,
};

export default theme;
