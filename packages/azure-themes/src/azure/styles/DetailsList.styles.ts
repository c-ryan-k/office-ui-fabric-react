import { ICheckStyleProps, ICheckStyles } from 'office-ui-fabric-react/lib/Check';
// tslint:disable-next-line: max-line-length
import {
  IDetailsListStyleProps,
  IDetailsListStyles,
  IDetailsRowStyleProps,
  IDetailsRowStyles,
  IDetailsColumnStyles,
  IDetailsColumnStyleProps
} from 'office-ui-fabric-react/lib/DetailsList';
import * as StyleConstants from '../../common/Constants';
import { IExtendedSemanticColors } from '../../common/IExtendedSemanticColors.ts';
import { FontSizes } from '../../common';

export const CheckStyles = (props: ICheckStyleProps): Partial<ICheckStyles> => {
  const { theme, checked } = props;
  const extendedSemanticColors = theme.semanticColors as IExtendedSemanticColors;

  return {
    circle: [
      {
        fontSize: 0,
        backgroundColor: extendedSemanticColors.listBackground,
        border: `${StyleConstants.borderWidth} ${StyleConstants.borderSolid} ${extendedSemanticColors.controlOutline}`,
        borderRadius: 2
      },
      checked && {
        backgroundColor: extendedSemanticColors.checkboxSelectedBackground,
        color: extendedSemanticColors.checkboxCheckSelected
      }
    ],
    check: [
      checked && {
        color: extendedSemanticColors.checkboxCheckSelected
      },
      !checked && {
        selectors: {
          ':hover': {
            color: extendedSemanticColors.checkboxCheckHover
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
export const DetailsRowStyles = (props: IDetailsRowStyleProps): Partial<IDetailsRowStyles> => {
  const { isSelected, theme } = props;
  const { semanticColors } = theme;
  return {
    root: [
      isSelected && {
        backgroundColor: semanticColors.listItemBackgroundChecked,
        selectors: {
          ':focus': {
            backgroundColor: semanticColors.listItemBackgroundChecked
          }
        }
      },
      {
        color: semanticColors.listText,
        selectors: {
          ':hover': {
            backgroundColor: semanticColors.listItemBackgroundHovered
          }
        }
      }
    ],
    isRowHeader: {
      fontSize: FontSizes.size13
    },
    cell: {
      fontSize: FontSizes.size13
    }
  };
};
export const DetailsListStyles = (props: IDetailsListStyleProps): Partial<IDetailsListStyles> => {
  return {
    root: {
      fontSize: FontSizes.size13,
      borderTop: StyleConstants.borderNone
    },
    contentWrapper: {
      fontSize: FontSizes.size13
    }
  };
};
export const DetailsColumnStyles = (props: IDetailsColumnStyleProps): Partial<IDetailsColumnStyles> => {
  return {
    cellName: {
      fontWeight: 'normal',
      fontSize: FontSizes.size13
    }
  };
};
