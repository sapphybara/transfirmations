interface PaletteIntent {
  "50": string;
  "100": string;
  "200": string;
  "300": string;
  "400": string;
  "500": string;
  "600": string;
  "700": string;
  "800": string;
  "900": string;
  plainColor: string;
  plainHoverBg: string;
  plainActiveBg: string;
  plainDisabledColor: string;
  outlinedColor: string;
  outlinedBorder: string;
  outlinedHoverBg: string;
  outlinedActiveBg: string;
  outlinedDisabledColor: string;
  outlinedDisabledBorder: string;
  softColor: string;
  softBg: string;
  softHoverBg: string;
  softActiveColor: string;
  softActiveBg: string;
  softDisabledColor: string;
  softDisabledBg: string;
  solidColor: string;
  solidBg: string;
  solidHoverBg: string;
  solidActiveBg: string;
  solidDisabledColor: string;
  solidDisabledBg: string;
  mainChannel?: string;
  lightChannel?: string;
  darkChannel?: string;
}

interface Palette {
  mode: "girly" | "boyish";
  primary: PaletteIntent;
  secondary: PaletteIntent;
  neutral: PaletteIntent;
  danger: PaletteIntent;
  success: PaletteIntent;
  warning: PaletteIntent;
  common: {
    white: string;
    black: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    icon: string;
  };
  background: {
    body: string;
    surface: string;
    popup: string;
    level1: string;
    level2: string;
    level3: string;
    tooltip: string;
    backdrop: string;
  };
  divider: string;
  focusVisible: string;
}

interface Theme {
  palette: Palette;
  shadowRing: string;
  shadowChannel: string;
  shadowOpacity: string;
}

export default Theme;
