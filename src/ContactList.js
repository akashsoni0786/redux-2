import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";





export default function ContactList() {
  const dispatch = useDispatch();
  const contct = useSelector((state) => state.contacts);

  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const deleterow = (mob) => {
    dispatch({
      type:'REMOVE_CONTACT',
      data:mob
    })
  };

  return (
    <Paper sx={{ width: "80%" }}>
      <TableContainer sx={{ maxHeight: 640 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                sx={{ fontSize: "25px", fontWeight: "bolder" }}
                colSpan={2}
              >
                Contacts
              </TableCell>

              <TableCell
                align="center"
                sx={{ fontSize: "25px", fontWeight: "bolder" }}
                colSpan={2}
              ></TableCell>
              <TableCell align="center" colSpan={3}>
                <Link
                  href="#"
                  onClick={() => {
                    navigate("/");
                  }}
                  variant="body2"
                >
                  Go to add contacts
                </Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left" style={{ top: 57 }}>
                <b>Name</b>
              </TableCell>

              <TableCell align="left" style={{ top: 57 }}>
                <b> Address</b>
              </TableCell>

              <TableCell align="left" style={{ top: 57 }}>
                <b>Mobile No.</b>
              </TableCell>

              <TableCell align="left" style={{ top: 57 }}>
                <b>City</b>
              </TableCell>

              <TableCell align="left" style={{ top: 57 }}>
                <b>Email</b>
              </TableCell>
              <TableCell align="right" style={{ top: 57 }} >
                <b>Delete</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contct
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((i) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={i.mobile}>
                    <TableCell align="left" style={{ top: 57 }}>
                      {i.name}
                    </TableCell>

                    <TableCell align="left" style={{ top: 57 }}>
                      {i.address}
                    </TableCell>
                    <TableCell align="left" style={{ top: 57 }}>
                      {i.city}
                    </TableCell>
                    <TableCell align="left" style={{ top: 57 }}>
                      {i.mobile}
                    </TableCell>
                    <TableCell align="left" style={{ top: 57 }}>
                      {i.mail}
                    </TableCell>
                    <TableCell
                      align="right"
                      onClick={()=>{deleterow(i.mobile)}}
                      style={{
                        top: 57,
                        color: "red",
                        cursor: "pointer",
                        "&:hover": { fontWeight: "bolder" },
                      }}
                    >
                      Delete
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5,10, 25, 100]}
        component="div"
        count={contct.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
