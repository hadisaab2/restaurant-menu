import { createContext, useContext } from "react";

const MenuModeContext = createContext({
  menuMode: null,
  setMenuMode: () => {},
});

export const useMenuMode = () => useContext(MenuModeContext);

export default MenuModeContext;
