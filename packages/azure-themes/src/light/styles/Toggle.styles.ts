import { IToggleStyleProps, IToggleStyles } from 'office-ui-fabric-react/lib/Toggle';

export const ToggleStyles = (props: IToggleStyleProps): Partial<IToggleStyles> => {
  const { checked } = props;
  return {
    pill: {
      height: 18
    },
    thumb: [
      {
        borderWidth: 0,
        position: 'relative',
        height: 10,
        width: 10
      },
      checked && {
        right: 2
      },
      !checked && {
        left: 2
      }
    ]
  };
};
