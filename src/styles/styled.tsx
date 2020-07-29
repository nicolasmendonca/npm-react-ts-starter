import React from "react";
import styled, { CreateStyled } from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";

interface ITheme {
  fonts: {
    ubuntu: string;
  };
  colors: {
    white: string;
    mainBlue: string;
    lighterGray: string;
  };
}

const mainTheme: ITheme = {
  fonts: {
    ubuntu: "Ubuntu, sans-serif",
  },
  colors: {
    white: "#FFFFFF",
    mainBlue: "#4B8EFF",
    lighterGray: "#8FA1C0",
  },
};

export default styled as CreateStyled<ITheme>;

export const withTheme = (component: any) => (
  <ThemeProvider theme={mainTheme}>{component}</ThemeProvider>
);

export type PropsWithTheme<T> = T & { theme: ITheme };
