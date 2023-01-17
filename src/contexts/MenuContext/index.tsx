import { createContext, useState } from "react";

import { MenuContextProps, MenuProviderProps } from "./types";

export const MenuContext = createContext({} as MenuContextProps);

export const MenuProvider = ({ children }: MenuProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  function changeMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <MenuContext.Provider value={{ isOpen, changeMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
