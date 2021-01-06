import React from "react";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import ViewListIcon from "@material-ui/icons/ViewList";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { VIEW_MODES } from "../../pages/Pages";

type ToggleViewModePropsType = {
  viewMode: string;
  setViewMode: (value: string) => void;
};
export const ToggleViewMode: React.FC<ToggleViewModePropsType> = (props) => {
  const { viewMode, setViewMode } = props;

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    nextView: string
  ) => {
    setViewMode(nextView);
    // 1 variant localStorage
    // localStorage.setItem('viewMode', nextView);
  };
  return (
    <ToggleButtonGroup value={viewMode} exclusive onChange={handleChange}>
      <ToggleButton value={VIEW_MODES.TABLE} aria-label={VIEW_MODES.TABLE}>
        <ViewModuleIcon />
      </ToggleButton>
      <ToggleButton value={VIEW_MODES.GRID} aria-label={VIEW_MODES.GRID}>
        <ViewListIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
