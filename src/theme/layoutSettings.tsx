import React from 'react';
import storage from "@/common/storage";

export const getInitialLayoutMode = () => {
  const layoutMode:{ layoutMode?:number} = storage.getStorage('layoutMode') || {};
  return layoutMode.layoutMode;
};

export const setLayoutMode = (mode: any, setLayoutModeState: React.Dispatch<React.SetStateAction<any>>) => {
  setLayoutModeState(mode);
  storage.setStorage('layoutMode', JSON.stringify({ layoutMode: mode }));
};