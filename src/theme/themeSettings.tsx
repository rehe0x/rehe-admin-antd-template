import storage from "@/common/storage";
import ThemeCustom from "@/theme/index";

export const getInitialThemeState = () => {
  const themeConfig: { algorithm?: string; componentSize?: string } = storage.getStorage('themeConfig') || {};
  
  return {
    algorithm: themeConfig.algorithm || 'light',
    componentSize: themeConfig.componentSize || 'middle',
  };
};

export const getAlgorithm = (action: string) => {
  switch (action) {
    case 'light':
      return ThemeCustom.CustomDefaultAlgorithm;
    case 'dark':
      return ThemeCustom.CustomDarkAlgorithm;
    default:
      return ThemeCustom.CustomDefaultAlgorithm;
  }
};

export const themeReducer = (state: any, action: string) => {
  if (action === 'light' || action === 'dark') {
    state.algorithm = action;
  } else {
    state.componentSize = action;
  }

  storage.setStorage('themeConfig', JSON.stringify(state));
  return { ...state };
};