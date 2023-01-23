import { createContext, useState } from "react";

import { WorksContextProps, WorksProviderProps } from "./types";
import { worksProps } from "../../data/works/types";

import { works } from "../../data/works";

export const WorksContext = createContext({} as WorksContextProps);

export const WorksProvider = ({ children }: WorksProviderProps) => {
  const [originalWorks] = useState(works);
  const [filteredWorks, setFilteredWorks] = useState(originalWorks);

  function filterWorks(works: worksProps[]) {
    setFilteredWorks(works);
  }

  return (
    <WorksContext.Provider
      value={{ filteredWorks, originalWorks, filterWorks }}
    >
      {children}
    </WorksContext.Provider>
  );
};

export default WorksProvider;
