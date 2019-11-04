import { ICheckStyleProps, ICheckStyles } from 'office-ui-fabric-react/lib/Check';
import { IDetailsListStyleProps, IDetailsListStyles } from 'office-ui-fabric-react/lib/DetailsList';
import * as StyleConstants from '../../common/Constants';
import { IExtendedSemanticColors } from '../../common/IExtendedSemanticColors.ts';

export const CheckStyles = (props: ICheckStyleProps): Partial<ICheckStyles> => {
  const { theme, checked } = props;
  const semanticColors = theme.semanticColors as IExtendedSemanticColors;

  return {
    root: [
      checked && {
        selectors: {
          ':hover': {
            selectors: {
              '.ms-Check-circle': {
                backgroundColor: semanticColors.checkboxSelectedHoverBackground
              }
            }
          }
        }
      }
    ],
    circle: [
      {
        fontSize: 0,
        backgroundColor: semanticColors.listBackground,
        border: `${StyleConstants.borderWidth} ${StyleConstants.borderSolid} ${semanticColors.bodyText}`
      },
      checked && {
        backgroundColor: semanticColors.checkboxSelectedBackground,
        color: semanticColors.checkboxCheckSelected
      }
    ],
    check: [
      checked && {
        color: semanticColors.checkboxCheckSelected
      },
      !checked && {
        selectors: {
          ':hover': {
            color: semanticColors.checkboxCheckHover
          }
        }
      },
      {
        fontSize: 26,
        fontWeight: 100,
        top: -5,
        left: -2
      }
    ]
  };
};

export const DetailsListStyles = (props: IDetailsListStyleProps): Partial<IDetailsListStyles> => {
  return {
    root: {
      borderTop: StyleConstants.borderNone
    }
  };
};
