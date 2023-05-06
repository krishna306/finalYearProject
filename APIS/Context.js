import React, { createContext, useEffect, useState } from "react";
export const AppContext = createContext();
export default Context = ({ children }) => {
  const [index, setIndex] = useState(0);
  const [detectedDisease, setDetectedDisease] = useState(null)
  return (
    <AppContext.Provider
      value={{
        index,
        setIndex,
        detectedDisease,
        setDetectedDisease
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
