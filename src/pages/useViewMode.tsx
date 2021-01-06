import { useEffect, useState } from "react";
import { VIEW_MODES } from "./Pages";

const getInitialViewMode = () => {
  return localStorage.getItem("viewMode") || VIEW_MODES.TABLE;
};

export const useViewMode = () => {
  const [viewMode, setViewMode] = useState(getInitialViewMode);

  // 2 variant localStorage
  useEffect(() => {
    localStorage.setItem("viewMode", viewMode);
  }, [viewMode]);

  return [viewMode, setViewMode] as const;
};
