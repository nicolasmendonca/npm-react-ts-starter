import styled, { PropsWithTheme } from "../../styles/styled";

type PropGetter = (props: PropsWithTheme<IRoundedButtonProps>) => string;
type AvailableVariants = keyof typeof variants;
type AvailableProperties = keyof typeof variants.default;
interface IRoundedButtonProps {
  variant?: AvailableVariants;
}

const variants = {
  default: {
    backgroundColor: (props: PropsWithTheme<IRoundedButtonProps>) =>
      props.theme.colors.white,
    border: (props: PropsWithTheme<IRoundedButtonProps>) =>
      `1px solid ${props.theme.colors.lighterGray}`,
    color: (props: PropsWithTheme<IRoundedButtonProps>) =>
      props.theme.colors.lighterGray,
  },
  primary: {
    backgroundColor: (props: PropsWithTheme<IRoundedButtonProps>) =>
      props.theme.colors.mainBlue,
    border: () => "none",
    color: () => "white",
  },
};

const getVariantProp = (propName: AvailableProperties) => (
  props: PropsWithTheme<IRoundedButtonProps>
): PropGetter => variants[props.variant || "default"][propName];

export const RoundedButton = styled.button<IRoundedButtonProps>`
  border-radius: 25px;
  font-family: ${(props) => props.theme.fonts.ubuntu};
  border: ${getVariantProp("border")};
  background-color: ${getVariantProp("backgroundColor")};
  color: ${getVariantProp("color")};
  line-height: 15px;
  font-size: 13px;
  padding: 0.5em 1.5em;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
