import React, { useCallback, useState } from "react";
import { Box, Tooltip } from "@material-ui/core";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useCopyToClipboard } from "react-use";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

//TS
type CopyTextToClipboardPropsType = {
  text: string;
};
//Styles

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      cursor: "pointer",
    },
    icon: {
      // marginRight:'8px'
      marginRight: theme.spacing(1),
    },
  })
);

export const CopyTextToClipboard: React.FC<CopyTextToClipboardPropsType> = (
  props
) => {
  const { text } = props;
  const classes = useStyles();

  //useCopyToClipboard
  const [, copyToClipboard] = useCopyToClipboard();

  // Title status
  const STATUS_COPY = {
    COPY: "copy",
    COPIED: "copied",
  };

  const TITLE_BY_STATUS = {
    [STATUS_COPY.COPY]: "Copy",
    [STATUS_COPY.COPIED]: "Copied",
  };
  const [copyText, setCopyText] = useState<string>(STATUS_COPY.COPY);

  // const getCopyTitleTooltip = () => {
  //     switch (copyText) {
  //         case STATUS_COPY.COPY:
  //             return 'Copy';
  //         case STATUS_COPY.COPIED:
  //             return 'Copied';
  //         default:
  //             return '';
  //     }
  // }
  const copyToClipboardHandler = useCallback(() => {
    setCopyText(STATUS_COPY.COPIED);
    copyToClipboard(text);
  }, [copyToClipboard, text]);

  const mouseLeaveHandler = useCallback(() => {
    setCopyText(STATUS_COPY.COPY);
  }, []);

  return (
    <ClickAwayListener onClickAway={mouseLeaveHandler}>
      <Tooltip
        // title={getCopyTitleTooltip()}
        title={TITLE_BY_STATUS[copyText]}
        placement={"top"}
      >
        <Box
          display="flex"
          alignItems="center"
          className={classes.root}
          onClick={copyToClipboardHandler}
        >
          <FileCopyOutlinedIcon fontSize={"small"} className={classes.icon} />
          {text}
        </Box>
      </Tooltip>
    </ClickAwayListener>
  );
};
