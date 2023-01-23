import { worksProps } from "../../data/works/types";

export interface WorksProviderProps {
  children: React.ReactNode;
}

export interface WorksContextProps {
  originalWorks: worksProps[]
  filteredWorks: worksProps[];
  filterWorks: (works: worksProps[]) => void;
}
