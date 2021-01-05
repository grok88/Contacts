import React from "react";
import { ContactType } from "../useContacts";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import { TableRow } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";

type ContactsTablePropsType = {
  data: Array<ContactType>;
};

const useStyles = makeStyles({
  table: {},
});

export const ContactsTable: React.FC<ContactsTablePropsType> = React.memo(
  (props) => {
    const { data } = props;

    const classes = useStyles();

    // @ts-ignore
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="contacts table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Avatar</TableCell>
              <TableCell align="left">Fullname</TableCell>
              <TableCell align="left">Birthday</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Phone</TableCell>
              <TableCell align="left">Location</TableCell>
              <TableCell align="left">Nationality</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((contact) => {
              let result = parseISO(contact.dob.date);

              return (
                <TableRow key={contact.login.uuid}>
                  <TableCell>
                    <Avatar
                      alt={`${contact.name.first} ${contact.name.last}`}
                      src={contact.picture.medium}
                    />
                  </TableCell>
                  <TableCell align="left">{`${contact.name.title}. ${contact.name.first} ${contact.name.last}`}</TableCell>
                  <TableCell align="left">
                    <Typography>
                      {format(result, "EEEE, MM/dd/yyyy, h:m:ss, aaa")}
                    </Typography>
                    <Typography>{contact.dob.age}</Typography>
                  </TableCell>
                  <TableCell align="left">{contact.email}</TableCell>
                  <TableCell align="left">{contact.phone}</TableCell>
                  <TableCell align="left">6</TableCell>
                  <TableCell align="right">7</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
);
