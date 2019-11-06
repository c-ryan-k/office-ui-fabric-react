import { ICheckboxStyleProps, ICheckboxStyles } from 'office-ui-fabric-react/lib/Checkbox';
import { IExtendedSemanticColors } from '../../common/IExtendedSemanticColors';
import { borderWidth, borderSolid } from '../../common/Constants';
import { BaseColors } from '../AzureColors.ts';

export const CheckboxStyles = (props: ICheckboxStyleProps): Partial<ICheckboxStyles> => {
  const { disabled, indeterminate, checked, theme } = props;
  const { semanticColors } = theme;
  const extendedSemanticColors = semanticColors as IExtendedSemanticColors;

  return {
    root: [
      {
        selectors: {
          '.ms-Checkbox-label .ms-Checkbox-checkbox': {
            borderRadius: 2,
            backgroundColor: semanticColors.bodyBackground
          }
        }
      },
      !disabled && {
        selectors: {
          '.ms-Checkbox-label .ms-Checkbox-checkbox': {
            border: `${borderWidth} ${borderSolid} ${extendedSemanticColors.bodyText}`
          }
        }
      },
      disabled && {
        selectors: {
          '.ms-Checkbox-label .ms-Checkbox-checkbox': {
            border: `${borderWidth} ${borderSolid} ${semanticColors.disabledBodyText}`
          },
          '.ms-Checkbox-label .ms-Checkbox-checkmark': {
            color: semanticColors.disabledBodyText
          }
        }
      },
      checked &&
        !disabled && {
          selectors: {
            '.ms-Checkbox-label .ms-Checkbox-checkmark': {
              color: BaseColors.BLUE_0089FA
            }
          }
        },
      !checked && {
        selectors: {
          '.ms-Checkbox-label .ms-Checkbox-checkmark': {
            color: semanticColors.bodyBackground
          }
        }
      }
    ],
    checkbox: [
      {
        height: 18,
        width: 18
      },
      !checked && {
        fontSize: 0
      },
      indeterminate && {
        fontSize: 0,
        selectors: {
          ':after': {
            borderRadius: 0,
            borderWidth: 0,
            width: 8,
            height: 8,
            top: 4,
            left: 4
          }
        }
      },
      indeterminate &&
        !disabled && {
          color: semanticColors.bodyBackground,
          selectors: {
            ':after': {
              backgroundColor: BaseColors.BLUE_0089FA
            }
          }
        },
      indeterminate &&
        disabled && {
          selectors: {
            ':after': {
              backgroundColor: semanticColors.disabledBodyText
            }
          }
        }
    ],
    checkmark: [
      indeterminate && {
        fontSize: 0
      }
    ]
  };
};
