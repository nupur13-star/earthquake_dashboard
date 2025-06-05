// src/context/SelectionContext.tsx
import { createContext } from "react";

export type SelectionContextType = {
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
};

export const SelectionContext = createContext<SelectionContextType | undefined>(undefined);
