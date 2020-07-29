import React from "react";
import { RoundedButton } from "../components";
import { withTheme } from "../styles/styled";

export default {
  title: "RoundedButton",
  component: RoundedButton,
};

export const Default = () => withTheme(<RoundedButton>Default</RoundedButton>);
export const DefaultDisabled = () =>
  withTheme(<RoundedButton disabled>Default disabled</RoundedButton>);
export const Primary = () =>
  withTheme(<RoundedButton variant="primary">Primary</RoundedButton>);
export const PrimaryDisabled = () =>
  withTheme(
    <RoundedButton variant="primary" disabled>
      Primary Disabled
    </RoundedButton>
  );
