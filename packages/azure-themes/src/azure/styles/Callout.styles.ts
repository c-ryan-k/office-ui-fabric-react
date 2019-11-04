import { ICalloutContentStyleProps, ICalloutContentStyles } from 'office-ui-fabric-react/lib/Callout';
import { Depths } from '../../common/AzureDepths';
import { FontSizes } from '../../common/AzureType';
import * as StyleConstants from '../../common/Constants';

export const CalloutContentStyles = (props: ICalloutContentStyleProps): Partial<ICalloutContentStyles> => {
  const { theme } = props;
  const { semanticColors } = theme;

  return {
    root: {
      borderColor: semanticColors.inputBorder,
      borderStyle: StyleConstants.borderSolid,
      borderWidth: StyleConstants.borderWidth,
      boxShadow: Depths.depth8
    },
    calloutMain: {
      color: semanticColors.bodyText,
      fontSize: FontSizes.size12
    }
  };
};
