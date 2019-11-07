import { FontSizes } from '../../common/AzureType';
import { IExtendedSemanticColors } from '../../common/IExtendedSemanticColors';
import { IToggleStyleProps, IToggleStyles } from 'office-ui-fabric-react/lib/Toggle';
import { BaseColors } from '../AzureColors';

export const ToggleStyles = (props: IToggleStyleProps): Partial<IToggleStyles> => {
  const { theme, disabled, checked } = props;
  const { semanticColors } = theme;
  const extendedSemanticColors = semanticColors as IExtendedSemanticColors;

  return {
    container: {},
    pill: [
      {
        height: 18,
        backgroundColor: semanticColors.bodyBackground
      },
      checked && {
        backgroundColor: extendedSemanticColors.controlAccent
      },
      !checked &&
        !disabled && {
          borderColor: BaseColors.GRAY_DFDFDF,
          selectors: {
            ':hover': {
              borderColor: semanticColors.bodyText
            }
          }
        },
      disabled && {
        backgroundColor: extendedSemanticColors.controlOutlineDisabled
      },
      !checked &&
        disabled && {
          backgroundColor: semanticColors.disabledBackground
        },
      checked &&
        !disabled && {
          selectors: {
            ':hover': {
              backgroundColor: BaseColors.BLUE_6CA9FE
            }
          }
        }
    ],
    // toggle circle
    thumb: [
      {
        borderWidth: 0,
        position: 'relative',
        height: 10,
        width: 10
      },
      checked && {
        right: 2
      },
      !checked && {
        left: 2
      },
      disabled && {
        backgroundColor: semanticColors.disabledBodyText
      },
      checked &&
        !disabled && {
          backgroundColor: BaseColors.WHITE
        },
      !checked &&
        !disabled && {
          backgroundColor: BaseColors.GRAY_DFDFDF
        }
    ],
    root: [
      {
        fontSize: FontSizes.size12,
        selectors: {
          '.ms-Toggle-stateText': {
            color: semanticColors.bodyText
          }
        }
      },
      disabled && {
        selectors: {
          '.ms-Toggle-stateText': {
            color: semanticColors.disabledBodyText
          }
        }
      }
    ]
  };
};
