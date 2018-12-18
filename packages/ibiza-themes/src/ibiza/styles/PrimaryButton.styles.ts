import { IButtonStyles } from 'office-ui-fabric-react/lib/Button';
import { IExtendedTheme } from '../IExtendedTheme';

export const PrimaryButtonStyles = (extendedTheme: IExtendedTheme): Partial<IButtonStyles> => {
  return {
    root: {
      border: '40px solid',
      borderColor: extendedTheme.semanticColors.buttons.primary.rest.border.color,
      backgroundColor: 'rgba(255, 140, 0, .5)',
      color: extendedTheme.semanticColors.buttons.primary.rest.text.color,
      padding: '0 20px'
    },
    rootHovered: {
      borderColor: extendedTheme.semanticColors.buttons.primary.hover.border.color,
      backgroundColor: 'rgba(255, 0, 0, .2)',
      color: extendedTheme.semanticColors.buttons.primary.hover.text.color
    },
    rootPressed: {
      backgroundColor: extendedTheme.theme.palette.themeTertiary,
      borderColor: extendedTheme.theme.palette.themeTertiary,
      color: extendedTheme.theme.palette.black
    },
    rootChecked: {
      backgroundColor: extendedTheme.theme.palette.themeTertiary,
      borderColor: extendedTheme.theme.palette.themeTertiary,
      color: extendedTheme.theme.palette.black
    },
    rootFocused: {
      color: extendedTheme.theme.palette.black,
      outline: `${extendedTheme.theme.palette.black} dotted 1px`
    }
  };
};
