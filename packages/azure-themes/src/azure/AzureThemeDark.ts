import { createTheme, ITheme } from 'office-ui-fabric-react';
import { CommonSemanticColors, DarkSemanticColors, StatusColors, BaseColors } from './AzureColors';
import { IExtendedSemanticColors } from '../common/IExtendedSemanticColors';
import { FontSizes } from '../common/AzureType';
import * as StyleConstants from '../common/Constants';

const darkExtendedSemanticColors: Partial<IExtendedSemanticColors> = {
  bodyBackground: DarkSemanticColors.background,
  bodyText: DarkSemanticColors.text.body,
  bodyDivider: CommonSemanticColors.dividers.lineSeparator,
  buttonBackground: DarkSemanticColors.secondaryButton.rest.background,
  buttonBackgroundChecked: DarkSemanticColors.secondaryButton.pressed.background,
  buttonBackgroundCheckedHovered: DarkSemanticColors.secondaryButton.hover.background,
  buttonBackgroundDisabled: DarkSemanticColors.disabledButton.background,
  buttonBackgroundHovered: DarkSemanticColors.secondaryButton.hover.background,
  buttonBackgroundPressed: DarkSemanticColors.secondaryButton.pressed.background,
  buttonText: DarkSemanticColors.secondaryButton.rest.border,
  buttonTextChecked: DarkSemanticColors.secondaryButton.pressed.border,
  buttonTextCheckedHovered: DarkSemanticColors.secondaryButton.hover.border,
  buttonTextDisabled: DarkSemanticColors.disabledButton.text,
  buttonTextHovered: DarkSemanticColors.secondaryButton.hover.border,
  buttonTextPressed: DarkSemanticColors.secondaryButton.pressed.border,
  disabledBackground: CommonSemanticColors.backgrounds.disabled,
  disabledBodyText: DarkSemanticColors.text.disabled,
  errorBackground: DarkSemanticColors.controlOutlines.error,
  errorText: DarkSemanticColors.text.error,
  focusBorder: DarkSemanticColors.controlOutlines.accent,
  inputBackground: DarkSemanticColors.background,
  inputText: DarkSemanticColors.text.value,
  inputBorder: CommonSemanticColors.textControlOutline.rest,
  inputBorderHovered: CommonSemanticColors.textControlOutline.hover,
  inputPlaceholderText: DarkSemanticColors.text.placeholder,
  link: DarkSemanticColors.text.hyperlink,
  linkHovered: DarkSemanticColors.text.hyperlink,
  listBackground: DarkSemanticColors.background,
  listHeaderBackgroundPressed: DarkSemanticColors.item.hover,
  listItemBackgroundChecked: BaseColors.GRAY_808080_050,
  listItemBackgroundCheckedHovered: BaseColors.GRAY_808080_050,
  listItemBackgroundHovered: BaseColors.GRAY_808080_025,
  listText: DarkSemanticColors.text.body,
  menuItemBackgroundHovered: DarkSemanticColors.item.hover,
  menuItemBackgroundPressed: DarkSemanticColors.item.select,
  primaryButtonBackground: DarkSemanticColors.primaryButton.rest.background,
  primaryButtonBackgroundDisabled: DarkSemanticColors.disabledButton.background,
  primaryButtonBackgroundHovered: DarkSemanticColors.primaryButton.hover.background,
  primaryButtonBackgroundPressed: DarkSemanticColors.primaryButton.pressed.background,
  primaryButtonText: DarkSemanticColors.primaryButton.rest.text,
  primaryButtonTextDisabled: DarkSemanticColors.disabledButton.text,
  primaryButtonTextHovered: DarkSemanticColors.primaryButton.hover.text,
  primaryButtonTextPressed: DarkSemanticColors.primaryButton.pressed.text,
  variantBorder: CommonSemanticColors.dividers.lineSeparator,
  controlAccent: DarkSemanticColors.controlOutlines.accent,
  controlOutline: DarkSemanticColors.controlOutlines.rest,
  controlOutlineDisabled: DarkSemanticColors.controlOutlines.disabled,
  controlOutlineHovered: DarkSemanticColors.controlOutlines.hover,
  labelText: DarkSemanticColors.text.label,
  statusErrorBackground: StatusColors.Dark.errorBackground,
  statusErrorText: DarkSemanticColors.text.body,
  statusErrorIcon: StatusColors.Dark.error,
  statusInformationBackground: StatusColors.Dark.infoBackground,
  statusInformationText: DarkSemanticColors.text.body,
  statusInformationIcon: StatusColors.Dark.info,
  statusSuccessBackground: StatusColors.Dark.successBackground,
  statusSuccessText: DarkSemanticColors.text.body,
  statusSuccessIcon: StatusColors.Dark.success,
  statusWarningBackground: StatusColors.Dark.warningBackground,
  statusWarningText: DarkSemanticColors.text.body,
  statusWarningIcon: StatusColors.Dark.warning,
  statusSevereWarningBackground: StatusColors.Dark.warningBackground,
  statusSevereWarningIcon: StatusColors.Dark.warning,
  checkboxCheckHover: DarkSemanticColors.background,
  checkboxCheckSelected: DarkSemanticColors.text.body,
  checkboxSelectedBackground: BaseColors.GRAY_404040,
  checkboxSelectedHoverBackground: DarkSemanticColors.background
};

export const AzureThemeDark: ITheme = createTheme({
  fonts: {
    medium: {
      fontFamily: StyleConstants.fontFamily,
      fontSize: FontSizes.size13
    }
  },
  palette: {
    themePrimary: DarkSemanticColors.controlOutlines.accent,
    neutralPrimary: DarkSemanticColors.text.body,
    neutralDark: DarkSemanticColors.text.body,
    neutralLighter: DarkSemanticColors.shimmer.secondary, // shimmer elements
    neutralLight: DarkSemanticColors.shimmer.primary, // shimmer elements
    neutralLighterAlt: DarkSemanticColors.item.hover, // nav highlight
    neutralQuaternaryAlt: DarkSemanticColors.item.select, // expand button on list controls
    neutralSecondary: DarkSemanticColors.text.label, // persona,
    white: DarkSemanticColors.background // shimmer elements
  },
  semanticColors: darkExtendedSemanticColors
});
