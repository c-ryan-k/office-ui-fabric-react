import { IModalStyles, IModalStyleProps } from 'office-ui-fabric-react';
import { Depths } from '../../common/AzureDepths';
import { FontSizes } from '../../common/AzureType';
import * as StyleConstants from '../../common/Constants';

export const ModalStyles = (props: IModalStyleProps): Partial<IModalStyles> => {
  const { theme } = props;
  const { semanticColors } = theme;

  return {
    root: {
      color: semanticColors.bodyText,
      fontSize: FontSizes.size12
    },
    main: {
      borderColor: semanticColors.inputBorder,
      borderStyle: StyleConstants.borderSolid,
      borderWidth: StyleConstants.borderWidth,
      boxShadow: Depths.depth8
    }
  };
};
