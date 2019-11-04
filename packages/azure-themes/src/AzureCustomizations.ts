import { ICustomizations } from 'office-ui-fabric-react';
import { AzureThemeDark } from './azure/AzureThemeDark';
import { AzureThemeLight } from './light/AzureThemeLight';
import { DarkStyleSettings } from './azure/AzureStyleSettings';
import { LightStyleSettings } from './light/LightStyleSettings';

export const AzureCustomizationsDark: ICustomizations = {
  settings: {
    theme: { ...AzureThemeDark }
  },
  scopedSettings: { ...DarkStyleSettings(AzureThemeDark) }
};

export const AzureCustomizationsLight: ICustomizations = {
  settings: {
    theme: { ...AzureThemeLight }
  },
  scopedSettings: { ...LightStyleSettings(AzureThemeLight) }
};
