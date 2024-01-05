import React, { FC, PropsWithChildren, createContext } from "react";

interface LevelProviderProps extends PropsWithChildren {
  initialLevel: number;
}

// Create a context to manage the level
export const LevelContext = createContext(0);

const LevelProvider: FC<LevelProviderProps> = ({ children, initialLevel }) => (
  <LevelContext.Provider value={initialLevel}>{children}</LevelContext.Provider>
);

export default LevelProvider;
