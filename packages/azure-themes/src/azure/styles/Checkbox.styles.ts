import { ICheckboxStyleProps, ICheckboxStyles } from 'office-ui-fabric-react/lib/Checkbox';
import { FontSizes } from '../../common/AzureType';

export const CheckboxStyles = (props: ICheckboxStyleProps): Partial<ICheckboxStyles> => {
  return {
    text: [
      {
        fontSize: FontSizes.size12
      }
    ]
  };
};
