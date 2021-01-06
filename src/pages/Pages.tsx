import Container from "@material-ui/core/Container";
import React from "react";
import { Box, Grid, LinearProgress, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useContacts } from "./useContacts";
import { ContactsTable } from "./contacts-table/ContactsTable";
import { ToggleViewMode } from "../components/toggle-view-mode/ToggleViewMode";
import { useViewMode } from "./useViewMode";

// import axios from 'axios'
//
// const axiosInstance = axios.create({
//     baseURL: 'https://randomuser.me/api/',
//     withCredentials: true
// })

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(3),
    },
    titleContainer: {
      marginBottom: theme.spacing(3),
    },
  })
);
export const VIEW_MODES = {
  TABLE: "table",
  GRID: "grid",
};

export const Contacts = () => {
  const classes = useStyles();
  const contacts = useContacts();
  const [viewMode, setViewMode] = useViewMode();

  return (
    <Container>
      <Grid container className={classes.root}>
        <Grid item xs={12} className={classes.titleContainer}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h4" component="h1">
              Contacts
            </Typography>
            <ToggleViewMode viewMode={viewMode} setViewMode={setViewMode} />
          </Box>
        </Grid>
        <Grid item xs={12}>
          {(() => {
            if (contacts.isLoading) {
              return <LinearProgress color="secondary" />;
            }
            if (contacts.isError) {
              return <div>...isError</div>;
            }
            if (viewMode === VIEW_MODES.TABLE) {
              return <ContactsTable data={contacts.data} />;
            }
            if (viewMode === VIEW_MODES.GRID) {
              return "GRID";
            }
            return null;
          })()}
        </Grid>
      </Grid>
    </Container>
  );
};
