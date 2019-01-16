import { IBasePickerStyles, IBasePickerStyleProps } from 'office-ui-fabric-react/lib/Pickers';
import { FontSizes } from '../AzureType';
import * as StyleConstants from '../Constants';
import { IExtendedSemanticColors } from '../IExtendedSemanticColors';

export const TagPickerStyles = (props: IBasePickerStyleProps): Partial<IBasePickerStyles> => {
  const { theme } = props;
  if (!theme) {
    return {};
  }
  const { semanticColors } = theme;
  const extendedSemanticColors = semanticColors as IExtendedSemanticColors;
  return {
    root: {
      fontSize: FontSizes.size12,
      border: `${StyleConstants.borderWidth} solid ${StyleConstants.transparent}`,
      selectors: {
        '[disabled]': {
          backgroundColor: semanticColors.buttonBackgroundDisabled,
          color: semanticColors.buttonTextDisabled
        }
      }
    },
    input: {
      color: extendedSemanticColors.inputText,
      backgroundColor: semanticColors.inputBackground,
      border: 'none'
    },
    itemsWrapper: {
      color: semanticColors.bodyText,
      border: 'none',
      backgroundColor: semanticColors.inputBackground
    },
    text: {
      border: `${StyleConstants.borderWidth} solid ${extendedSemanticColors.controlOutline}`
    }
  };
};
