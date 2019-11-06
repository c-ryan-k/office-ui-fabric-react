import { ITheme } from 'office-ui-fabric-react';
import { CheckStyles, DetailsListStyles, DetailsRowStyles, DetailsColumnStyles } from './styles/DetailsList.styles';
import { TextFieldStyles } from './styles/TextField.styles';
import { MessageBarStyles } from './styles/MessageBar.styles';
import { DefaultButtonStyles } from './styles/DefaultButton.styles';
import { CheckboxStyles } from './styles/Checkbox.styles.ts';

export const LightStyleSettings = (theme: ITheme) => {
  return {
    Check: {
      styles: CheckStyles
    },
    Checkbox: {
      styles: CheckboxStyles
    },
    DefaultButton: {
      styles: DefaultButtonStyles
    },
    DetailsColumn: {
      styles: DetailsColumnStyles
    },
    DetailsList: {
      styles: DetailsListStyles
    },
    DetailsRow: {
      styles: DetailsRowStyles
    },
    MessageBar: {
      styles: MessageBarStyles
    },
    TextField: {
      styles: TextFieldStyles
    }
  };
};
