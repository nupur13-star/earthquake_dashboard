
import { useState } from "react";
import { SelectionContext } from "./SelectionContext";

const SelectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <SelectionContext.Provider value={{ selectedId, setSelectedId }}>
      {children}
    </SelectionContext.Provider>
  );
};

export { SelectionProvider };
