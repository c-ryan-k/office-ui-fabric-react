import { IButtonStyles } from 'office-ui-fabric-react/lib/Button';
import { ITheme } from 'office-ui-fabric-react/lib/Styling';
import { FontSizes } from '../../common/AzureType';

export const DefaultButtonStyles = (theme: ITheme): Partial<IButtonStyles> => {
  return {
    root: {
      fontSize: FontSizes.size13,
      height: 24
    },
    splitButtonContainer: {
      height: 24
    },
    splitButtonMenuIcon: {
      height: 24,
      top: -2,
      position: 'relative'
    }
  };
};
