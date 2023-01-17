export interface MenuProviderProps {
  children: React.ReactNode;
}

export interface MenuContextProps {
  changeMenu(): void;
  isOpen: boolean;
}
