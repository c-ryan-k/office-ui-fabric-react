import { createTheme, ITheme } from 'office-ui-fabric-react';
import { FontSizes } from '../common/AzureType';
import * as StyleConstants from '../common/Constants';
import { FluentNeutralColors, StatusColors, FluentColors } from './AzureColors';
import { IExtendedSemanticColors } from '../common/IExtendedSemanticColors';

const lightExtendedSemanticColors: Partial<IExtendedSemanticColors> = {
  // extended
  statusErrorBackground: StatusColors.errorBackground,
  statusErrorIcon: StatusColors.error,
  statusInformationBackground: StatusColors.infoBackground,
  statusInformationIcon: StatusColors.info,
  statusSuccessBackground: StatusColors.successBackground,
  statusSuccessIcon: StatusColors.success,
  statusWarningBackground: StatusColors.warningBackground,
  statusWarningIcon: StatusColors.warning,
  statusSevereWarningBackground: StatusColors.warningBackground,
  statusSevereWarningIcon: StatusColors.warning,
  checkboxCheckHover: FluentNeutralColors.black,
  checkboxCheckSelected: FluentNeutralColors.white,
  checkboxSelectedBackground: FluentColors.cyanBlue10,
  checkboxSelectedHoverBackground: FluentColors.cyanBlue20
};

export const AzureThemeLight: ITheme = createTheme({
  fonts: {
    medium: {
      fontFamily: StyleConstants.fontFamily,
      fontSize: FontSizes.size12
    }
  },
  palette: {
    neutralDark: FluentNeutralColors.gray190,
    neutralPrimary: FluentNeutralColors.gray160,
    neutralPrimaryAlt: FluentNeutralColors.gray150,
    neutralSecondary: FluentNeutralColors.gray130,
    neutralSecondaryAlt: FluentNeutralColors.gray110,
    neutralTertiary: FluentNeutralColors.gray90,
    neutralTertiaryAlt: FluentNeutralColors.gray60,
    neutralQuaternary: FluentNeutralColors.gray50,
    neutralQuaternaryAlt: FluentNeutralColors.gray40,
    neutralLight: FluentNeutralColors.gray30,
    neutralLighter: FluentNeutralColors.gray20,
    neutralLighterAlt: FluentNeutralColors.gray10
  },
  semanticColors: lightExtendedSemanticColors
});
