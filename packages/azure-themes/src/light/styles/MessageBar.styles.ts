import { IStyle } from 'office-ui-fabric-react';
import { IMessageBarStyleProps, IMessageBarStyles, MessageBarType } from 'office-ui-fabric-react/lib/MessageBar';
import { IExtendedSemanticColors } from '../../common/IExtendedSemanticColors';

const generateBaseStyle = (backgroundColor: string, textColor: string): IStyle => {
  return {
    backgroundColor: backgroundColor,
    color: textColor,
    selectors: {
      '.ms-Button-icon': {
        color: textColor,
        selectors: {
          '&:hover': {
            backgroundColor: backgroundColor
          },
          '&:active': {
            backgroundColor: backgroundColor
          }
        }
      }
    }
  };
};

export const MessageBarStyles = (props: IMessageBarStyleProps): Partial<IMessageBarStyles> => {
  const { theme, messageBarType } = props;
  const semanticColors = theme.semanticColors as IExtendedSemanticColors;

  return {
    icon: [
      (messageBarType === MessageBarType.error || !messageBarType) && {
        color: semanticColors.statusErrorIcon
      },

      messageBarType === MessageBarType.info && {
        color: semanticColors.statusInformationIcon
      },

      messageBarType === MessageBarType.success && {
        color: semanticColors.statusSuccessIcon
      },

      (messageBarType === MessageBarType.warning || messageBarType === MessageBarType.severeWarning) && {
        color: semanticColors.statusWarningIcon
      }
    ],
    root: [
      (messageBarType === MessageBarType.error || messageBarType === MessageBarType.severeWarning) &&
        generateBaseStyle(semanticColors.statusErrorBackground, semanticColors.statusErrorText),

      (messageBarType === MessageBarType.info || !messageBarType) &&
        generateBaseStyle(semanticColors.statusInformationBackground, semanticColors.statusInformationText),

      messageBarType === MessageBarType.success &&
        generateBaseStyle(semanticColors.statusSuccessBackground, semanticColors.statusSuccessText),

      (messageBarType === MessageBarType.warning || messageBarType === MessageBarType.severeWarning) &&
        generateBaseStyle(semanticColors.statusWarningBackground, semanticColors.statusWarningText)
    ]
  };
};
