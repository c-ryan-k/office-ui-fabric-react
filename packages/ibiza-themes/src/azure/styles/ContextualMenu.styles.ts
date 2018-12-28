import {
  IContextualMenuStyleProps,
  IContextualMenuStyles,
  IContextualMenuItemStyleProps,
  IContextualMenuItemStyles
} from 'office-ui-fabric-react/lib/ContextualMenu';
import { Depths } from '../AzureDepths';
import { FontSizes } from '../AzureType';
import * as StyleConstants from '../Constants';

export const ContextualMenuStyles = (props: IContextualMenuStyleProps): Partial<IContextualMenuStyles> => {
  const { theme } = props;
  const { semanticColors } = theme;

  return {
    subComponentStyles: {
      callout: {
        root: {
          backgroundColor: semanticColors.inputBackground,
          borderColor: semanticColors.inputBorder,
          borderStyle: StyleConstants.borderSolid,
          borderWidth: StyleConstants.borderWidth,
          boxShadow: Depths.depth8
        }
      },
      menuItem: (itemStyleProps: IContextualMenuItemStyleProps): Partial<IContextualMenuItemStyles> => {
        return {
          root: [
            {
              fontSize: FontSizes.size12
            }
          ],
          divider: {
            backgroundColor: semanticColors.inputBorder
          },
          icon: {
            color: semanticColors.focusBorder
          }
        };
      }
    }
  };
};