import { ICheckboxStyleProps, ICheckboxStyles } from 'office-ui-fabric-react/lib/Checkbox';
import { FontSizes } from '../../common/AzureType';
import { IExtendedSemanticColors } from '../../common/IExtendedSemanticColors';

export const CheckboxStyles = (props: ICheckboxStyleProps): Partial<ICheckboxStyles> => {
  const { disabled, indeterminate, theme } = props;
  const { semanticColors } = theme;
  const extendedSemanticColors = semanticColors as IExtendedSemanticColors;

  return {
    root: [
      indeterminate &&
        !disabled && {
          selectors: {
            '.ms-Checkbox-label:hover .ms-Checkbox-checkbox': { borderColor: semanticColors.bodyText },
            '.ms-Checkbox-label:hover .ms-Checkbox-checkbox:after': {
              backgroundColor: extendedSemanticColors.checkboxSelectedHoverBackground
            }
          }
        }
    ],
    text: [
      {
        fontSize: FontSizes.size13
      }
    ],
    checkbox: [
      !disabled && {
        borderColor: semanticColors.bodyText
      },
      {
        height: 18,
        width: 18
      },
      indeterminate && {
        selectors: {
          ':after': {
            borderRadius: 0,
            borderWidth: 0,
            height: 8,
            width: 8,
            top: 4,
            left: 4
          }
        }
      },
      indeterminate &&
        !disabled && {
          selectors: {
            ':after': {
              backgroundColor: extendedSemanticColors.checkboxSelectedBackground
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
    ]
  };
};
