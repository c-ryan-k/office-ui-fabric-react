import { createTheme, ITheme } from 'office-ui-fabric-react';
import { NeutralColors, DarkColors, Palette } from './IbizaColors';
import { IExtendedTheme, ISemanticColors } from './IExtendedTheme';

export class IbizaExtendedThemeDark implements IExtendedTheme {
  public readonly theme: ITheme;
  public readonly semanticColors: ISemanticColors;

  constructor() {
    this.theme = createTheme({
      palette: {
        themeDarker: DarkColors.themeTint30,
        themeDark: DarkColors.themeTint20,
        themeDarkAlt: DarkColors.themeTint10,
        themePrimary: DarkColors.themePrimary,
        themeSecondary: DarkColors.themeShade10,
        themeTertiary: DarkColors.themeShade20,
        themeLight: DarkColors.themeShade30,
        themeLighter: DarkColors.themeShade40,
        themeLighterAlt: DarkColors.themeShade50,

        neutralDark: NeutralColors.gray20,
        neutralPrimary: NeutralColors.white,
        neutralPrimaryAlt: NeutralColors.gray40,
        neutralSecondary: NeutralColors.gray50,
        neutralTertiary: NeutralColors.gray60,
        neutralTertiaryAlt: NeutralColors.gray70,
        neutralQuaternary: NeutralColors.gray80,
        neutralQuaternaryAlt: NeutralColors.gray90,
        neutralLight: NeutralColors.gray100,
        neutralLighter: NeutralColors.gray110,
        neutralLighterAlt: NeutralColors.gray120,

        black: NeutralColors.gray10,
        white: NeutralColors.black
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
              color: Palette.BLUE_4894FE
            },
            border: {
              color: Palette.BLUE_4894FE
            },
            text: {
              color: Palette.GRAY_161616 // todo verify color
            }
          },
          hover: {
            background: {
              color: Palette.BLUE_6CA9FE
            },
            border: {
              color: Palette.BLUE_6CA9FE
            },
            text: {
              color: Palette.GRAY_161616 // todo verify color
            }
          },
          pressed: {
            background: {
              color: Palette.BLUE_257FFE
            },
            border: {
              color: Palette.BLUE_257FFE
            },
            text: {
              color: Palette.GRAY_161616 // todo verify color
            }
          }
        },
        secondary: {
          rest: {
            background: {
              color: Palette.GRAY_252525 // todo verify color
            },
            border: {
              color: Palette.BLUE_4894FE
            },
            text: {
              color: Palette.BLUE_4894FE
            }
          },
          hover: {
            background: {
              color: Palette.GRAY_808080,
              alpha: 0.1
            },
            border: {
              color: Palette.BLUE_6CA9FE
            },
            text: {
              color: Palette.BLUE_6CA9FE
            }
          },
          pressed: {
            background: {
              color: Palette.GRAY_808080,
              alpha: 0.1
            },
            border: {
              color: Palette.BLUE_257FFE
            },
            text: {
              color: Palette.BLUE_257FFE
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

const ibizaExtendedThemeDark = new IbizaExtendedThemeDark();
export default ibizaExtendedThemeDark;
