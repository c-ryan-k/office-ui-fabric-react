import { createTheme, ITheme } from 'office-ui-fabric-react';
import { NeutralColors, LightColors, Palette } from './IbizaColors';
import { IExtendedTheme, ISemanticColors } from './IExtendedTheme';

export class IbizaExtendedThemeLight implements IExtendedTheme {
  public readonly theme: ITheme;
  public readonly semanticColors: ISemanticColors;

  constructor() {
    this.theme = createTheme({
      palette: {
        themeDarker: LightColors.themeShade10,
        themeDark: LightColors.themeShade20,
        themeDarkAlt: LightColors.themeShade10,
        themePrimary: LightColors.themePrimary,
        themeSecondary: LightColors.themeTint10,
        themeTertiary: LightColors.themeTint20,
        themeLight: LightColors.themeTint30,
        themeLighter: LightColors.themeTint40,
        themeLighterAlt: LightColors.themeTint50,

        neutralDark: NeutralColors.gray110,
        neutralPrimary: NeutralColors.black,
        neutralPrimaryAlt: NeutralColors.gray90,
        neutralSecondary: NeutralColors.gray80,
        neutralTertiary: NeutralColors.gray70,
        neutralTertiaryAlt: NeutralColors.gray60,
        neutralQuaternary: NeutralColors.gray50,
        neutralQuaternaryAlt: NeutralColors.gray40,
        neutralLight: NeutralColors.gray30,
        neutralLighterAlt: NeutralColors.gray10,

        black: NeutralColors.gray120,
        white: NeutralColors.white
      }
    });

    this.semanticColors = {
      backgrounds: {
        section: {
          color: Palette.GRAY_6B849C,
          alpha: 0.06
        },
        item: {
          hover: {
            color: Palette.BLUE_55B3FF,
            alpha: 0.2
          },
          selected: {
            color: Palette.BLUE_55B3FF,
            alpha: 0.1
          }
        }
      },
      buttons: {
        primary: {
          rest: {
            background: {
              color: Palette.BLUE_015CDA
            },
            border: {
              color: Palette.BLUE_015CDA
            },
            text: {
              color: Palette.WHITE // todo verify color
            }
          },
          hover: {
            background: {
              color: Palette.BLUE_016AFE
            },
            border: {
              color: Palette.BLUE_016AFE
            },
            text: {
              color: Palette.WHITE // todo verify color
            }
          },
          pressed: {
            background: {
              color: Palette.BLUE_014DB7
            },
            border: {
              color: Palette.BLUE_014DB7
            },
            text: {
              color: Palette.WHITE // todo verify color
            }
          }
        },
        secondary: {
          rest: {
            background: {
              color: Palette.WHITE // todo verify color
            },
            border: {
              color: Palette.BLUE_015CDA
            },
            text: {
              color: Palette.BLUE_015CDA
            }
          },
          hover: {
            background: {
              color: Palette.GRAY_808080,
              alpha: 0.1
            },
            border: {
              color: Palette.BLUE_016AFE
            },
            text: {
              color: Palette.BLUE_016AFE
            }
          },
          pressed: {
            background: {
              color: Palette.GRAY_808080,
              alpha: 0.1
            },
            border: {
              color: Palette.BLUE_014DB7
            },
            text: {
              color: Palette.BLUE_014DB7
            }
          }
        },
        disabled: {
          background: {
            color: Palette.GRAY_808080,
            alpha: 0.1
          },
          border: {
            color: Palette.GRAY_808080,
            alpha: 0.1
          },
          text: {
            color: Palette.GRAY_808080, // todo verify color
            alpha: 0.7
          }
        }
      },
      dividers: {
        lineSeparator: {
          color: Palette.GRAY_6B849C,
          alpha: 0.25
        },
        border: {
          color: Palette.GRAY_6B849C,
          alpha: 0.25
        },
        sectionDivider: {
          color: Palette.GRAY_6B849C,
          alpha: 0.35
        },
        scrollbar: {
          color: Palette.GRAY_6B849C,
          alpha: 0.35
        }
      },
      statusBars: {
        okay: {
          background: {
            color: Palette.GREEN_5DB300,
            alpha: 0.18
          },
          text: {
            color: Palette.GRAY_161616
          }
        },
        error: {
          background: {
            color: Palette.RED_E81123,
            alpha: 0.18
          },
          text: {
            color: Palette.GRAY_161616
          }
        },
        warning: {
          background: {
            color: Palette.ORANGE_FF8C00,
            alpha: 0.18
          },
          text: {
            color: Palette.GRAY_161616,
            alpha: 1.0
          }
        },
        information: {
          background: {
            color: Palette.BLUE_015CDA,
            alpha: 0.18
          },
          text: {
            color: Palette.GRAY_161616,
            alpha: 1.0
          }
        },
        upsell: {
          background: {
            color: Palette.PURPLE_6917AA,
            alpha: 0.18
          },
          text: {
            color: Palette.GRAY_161616,
            alpha: 1.0
          }
        }
      },
      icon: {
        okay: {
          color: Palette.GREEN_5DB300
        },
        error: {
          color: Palette.RED_E81123
        },
        warning: {
          color: Palette.ORANGE_FF8C00
        },
        information: {
          color: Palette.BLUE_015CDA
        },
        upsell: {
          color: Palette.PURPLE_6917AA
        }
      }
    };
  }
}

const ibizaExtendedThemeLight = new IbizaExtendedThemeLight();
export default ibizaExtendedThemeLight;
