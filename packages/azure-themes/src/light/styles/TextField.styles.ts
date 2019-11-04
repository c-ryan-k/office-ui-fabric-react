import { ITextFieldStyleProps, ITextFieldStyles } from 'office-ui-fabric-react/lib/TextField';
import { FontSizes } from '../../common/AzureType';
import * as StyleConstants from '../../common/Constants';

export const TextFieldStyles = (props: ITextFieldStyleProps): Partial<ITextFieldStyles> => {
  const { focused, disabled, hasErrorMessage, multiline, theme } = props;
  const { semanticColors } = theme;

  return {
    fieldGroup: [
      !multiline && {
        height: StyleConstants.inputControlHeight
      },
      focused && {
        borderColor: semanticColors.focusBorder
      },
      disabled && {
        borderColor: semanticColors.disabledBodyText
      },
      hasErrorMessage && [
        {
          borderWidth: StyleConstants.borderWidthError
        },
        focused && {
          borderColor: semanticColors.focusBorder,
          selectors: {
            '&:focus, &:hover': {
              borderColor: semanticColors.focusBorder
            }
          }
        }
      ]
    ],
    icon: {
      bottom: 2
    },
    prefix: {
      fontSize: FontSizes.size12
    },
    suffix: {
      fontSize: FontSizes.size12
    },
    field: [
      {
        color: semanticColors.inputText,
        backgroundColor: semanticColors.inputBackground,
        fontSize: FontSizes.size12,
        selectors: {
          '::placeholder': {
            color: semanticColors.inputPlaceholderText,
            fontStyle: 'italic'
          },
          ':-ms-input-placeholder': {
            color: semanticColors.inputPlaceholderText,
            fontStyle: 'italic'
          },
          '::-webkit-input-placeholder': {
            color: semanticColors.inputPlaceholderText,
            fontStyle: 'italic'
          }
        }
      },
      disabled && {
        color: semanticColors.disabledBodyText,
        backgroundColor: semanticColors.disabledBackground
      }
    ],
    errorMessage: {
      color: semanticColors.errorText,
      selectors: {
        span: {
          height: '100%',
          display: 'inline-block',
          selectors: {
            ':after': {
              content: '""',
              float: 'left',
              boxSizing: 'border-box',
              width: 15,
              height: 15,
              border: `3px solid ${semanticColors.errorText}`,
              borderRadius: '100%',
              // tslint:disable-next-line: max-line-length
              background: `-webkit-linear-gradient(-45deg, transparent 0%, transparent 44%, ${semanticColors.bodyBackground} 44%,  ${
                semanticColors.bodyBackground
              } 56%,transparent 56%, transparent 100%),  -webkit-linear-gradient(45deg, transparent 0%, transparent 44%, ${
                semanticColors.bodyBackground
              } 44%,  ${semanticColors.bodyBackground} 56%,transparent 56%, transparent 100%)`,
              backgroundColor: semanticColors.errorText
            },
            ':before': {
              content: '""',
              marginLeft: 5
            }
          }
        }
      }
    }
  };
};
