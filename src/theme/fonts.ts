import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

import "@fontsource/work-sans/300.css";
import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/500.css";

const fonts = {
  poppins: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    fontFamily: "Poppins, sans-serif",
  },
  workSans: {
    light: 300,
    regular: 400,
    medium: 500,
    fontFamily: "Work Sans, sans-serif",
  },
} as const;

const getFontFamily = (font: keyof typeof fonts) => fonts[font].fontFamily;

const getFontWeight = (
  font: keyof typeof fonts,
  weight: keyof (typeof fonts)[typeof font]
) => fonts[font][weight];

const getFont = <
  F extends keyof typeof fonts,
  W extends keyof Omit<(typeof fonts)[F], "fontFamily">
>(
  font: F,
  weight: W | undefined = undefined
) =>
  ({
    fontFamily: fonts[font].fontFamily,
    fontWeight: fonts[font][weight ?? "regular"],
  } as const);

export { fonts, getFont, getFontFamily, getFontWeight };
