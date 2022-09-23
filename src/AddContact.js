import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import ContactsIcon from '@mui/icons-material/Contacts';
import { useDispatch, useSelector } from "react-redux";
const theme = createTheme();

export default function ContactForm() {
  const dispatch = useDispatch();
  const contct = useSelector(state=>state.contacts);


 console.log(contct);
  const [contactobj, setContactobj] = React.useState("");
  const navigate = useNavigate();
  const addcontactbtn = (e) => {
    e.preventDefault();
    if (
      e.target[0].value == "" ||
      e.target[2].value == "" ||
      e.target[4].value == "" ||
      e.target[6].value == "" ||
      e.target[8].value == ""
    ) {
      alert("All fields are mendetory!");
    } else {
      let one_contact = {
        name: e.target[0].value,
        address: e.target[2].value,
        city: e.target[4].value,
        mobile: e.target[6].value,
        mail: e.target[8].value,
      };
      setContactobj(one_contact);
      e.target[0].value = ""
      e.target[2].value = ""
      e.target[4].value = ""
      e.target[6].value = ""
      e.target[8].value = ""

      dispatch({
        type:'ADD_CONTACT',
        data:one_contact
      })
     
      
    }
  };


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1,p:4, bgcolor: "secondary.main" }}>
            <ContactsIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add Contact
          </Typography>
          <Box
            component="form"
              onSubmit={addcontactbtn}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Your name"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="City"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Mobile no."
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" onClick={()=>{navigate("/list")}}>
                  See all contacts
                </Link>
              </Grid>{" "}
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
