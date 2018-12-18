import { ITheme } from 'office-ui-fabric-react';

export interface IColor {
  alpha?: number;
  color: string;
}

export interface IButtonColors {
  background: IColor;
  border: IColor;
  text: IColor;
}

export interface IStatusBarColor {
  background: IColor;
  text: IColor;
}

export interface ISemanticColors {
  backgrounds: {
    section: IColor;
    item: {
      hover: IColor;
      selected: IColor;
    };
  };
  buttons: {
    primary: {
      rest: IButtonColors;
      hover: IButtonColors;
      pressed: IButtonColors;
    };
    secondary: {
      rest: IButtonColors;
      hover: IButtonColors;
      pressed: IButtonColors;
    };
    disabled: IButtonColors;
  };
  dividers: {
    lineSeparator: IColor;
    border: IColor;
    sectionDivider: IColor;
    scrollbar: IColor;
  };
  statusBars: {
    okay: IStatusBarColor;
    error: IStatusBarColor;
    warning: IStatusBarColor;
    information: IStatusBarColor;
    upsell: IStatusBarColor;
  };
  icon: {
    okay: IColor;
    error: IColor;
    warning: IColor;
    information: IColor;
    upsell: IColor;
  };
}

export interface IExtendedTheme {
  semanticColors: ISemanticColors;
  theme: ITheme;

  // dividers: {
  //   lineSeparator: IColor;
  //   border: IColor;
  //   sectionDivider: IColor;
  //   scrollbar: IColor;
  // };

  // text: {
  //   heading: IColor;
  //   body: IColor;
  //   label: IColor;
  //   disabled: IColor;
  //   hyperlink: IColor;
  //   success: IColor;
  //   error: IColor;
  //   value: IColor;
  // };
  // buttons: {
  //   primary: {
  //     rest: IButtonColors;
  //     hover: IButtonColors;
  //     pressed: IButtonColors;
  //   };
  //   secondary: {
  //     rest: IButtonColors;
  //     hover: IButtonColors;
  //     pressed: IButtonColors;
  //   };
  //   disabled: IButtonColors;
  // };

  // // input fields, drop downs, et al.
  // textControlOutlines: {
  //   rest: IColor;
  //   disabled: IColor;
  //   hover: IColor;
  //   error: IColor;
  //   dirty: IColor;
  // };

  // // checkboxes, radios, et all.
  // controlOutlines: {
  //   rest: IColor;
  //   disabled: IColor;
  //   hover: IColor;
  //   accent: IColor;
  // };
}
