import { React, useState } from 'react'
import {
  Input,
  InputLabel,
  Button,
  FormControl,
  FormHelperText,
  Box,
  TextField,
  Container,
  Typography,
} from "@mui/material";

import { changePasswordAPI } from "../../api/userApi"

import styles from './ChangePWModal.style'

const ChangePWModal = ({ setAppear }) => {

  const [oldPW, setOldPW] = useState({
    value: "",
    error: undefined,
  });
  const [newPW, setNewPW] = useState({
    value: "",
    error: undefined,
  });
  const [newPW2, setNewPW2] = useState({
    value: "",
    error: undefined,
  });

  const checkStrLength = (str, start, end) => {
    if (str.length >= start && str.length <= end) return true
    else return false
  }

  const checkMatchPasswords = (pw1, pw2) => {
    if (pw1 === pw2) return true
    else return false
  }

  const checkInputs = () => {
    let error = true
    if (checkStrLength(newPW.value, 6, 25) === false) {
      setNewPW({ ...newPW, error: "Password must be between 6 and 25 characters" })
      error = false
    }
    if (checkMatchPasswords(newPW.value, newPW2.value) === false) {
      setNewPW2({ ...newPW2, error: "Passwords don't match" })
      error = false
    }
    console.log(error);
    return error
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (checkInputs()) {
      changePasswordAPI(oldPW.value, newPW.value).then((res) => {
        console.log(res);
      })
    }
  }

  console.log(oldPW);
  console.log(newPW);
  console.log(newPW2);

  return (
    <Box sx={styles.box}>
      <FormControl fullWidth="true">

        <TextField
          sx={styles.textField}
          name="oldPW"
          label="Current password"
          type="password"
          onChange={(e) =>
            setOldPW({ ...oldPW, value: e.target.value })
          }
          placeholder="Enter your current password"
          value={oldPW.value}
          variant="outlined"
          inputProps={{ style: { fontSize: "17px" } }}
        />
        <Typography component="div" sx={styles.errorMsg}>{oldPW.error}</Typography>

        <TextField
          sx={styles.textField}
          name="oldPW"
          label="New password"
          type="password"
          onChange={(e) =>
            setNewPW({ ...newPW, value: e.target.value })
          }
          placeholder="Enter your new password"
          value={newPW.value}
          variant="outlined"
          inputProps={{ style: { fontSize: "17px" } }}
        />
        <Typography component="div" sx={styles.errorMsg}>{newPW.error}</Typography>

        <TextField
          sx={styles.textField}
          name="oldPW"
          label="Confirm password"
          type="password"
          onChange={(e) =>
            setNewPW2({ ...newPW2, value: e.target.value })
          }
          placeholder="Confirm your new password"
          value={newPW2.value}
          variant="outlined"
          inputProps={{ style: { fontSize: "17px" } }}
        />
        <Typography component="div" sx={styles.errorMsg}>{newPW2.error}</Typography>

        <Container sx={{ textAlign: "center", mt: 2 }}>
          <Button
            sx={styles.cancelBtn}
            onClick={() => setAppear(false)}
            size="small"
          >
            Cancel
          </Button>

          <Button
            sx={styles.submitBtn}
            onClick={(e) => handleSubmit(e)}
            size="small"
            type="submit"
          >
            Submit
          </Button>
        </Container>

      </FormControl>
    </Box>
  )
}

export default ChangePWModal