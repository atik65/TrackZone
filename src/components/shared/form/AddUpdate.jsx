import { Typography } from "@mui/joy";
import { Button, MenuItem, TextField } from "@mui/material";
import React from "react";

import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { StaticTimePicker, TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

const timeZones = [
  {
    value: "EST",
    label: "EST",
  },
  {
    value: "PST",
    label: "PST",
  },
  {
    value: "GMT",
    label: "GMT",
  },
];

const AddUpdate = ({ handleModal }) => {
  return (
    <div>
      <Typography
        sx={{
          fontSize: "1.3rem",
          textAlign: "center",
          mb: "0.8rem",
        }}
        variant="h1"
        component="h1"
      >
        Add Clock
      </Typography>

      <TextField
        sx={{ mb: "1.2rem" }}
        id="outlined-error"
        label="Clock Title"
        size="small"
        fullWidth
      />

      <TextField
        fullWidth
        sx={{ mb: "1.2rem" }}
        size="small"
        id="outlined-select-currency"
        select
        label="Time Zone"
        defaultValue="EUR"
        helperText="Please select Time Zone"
      >
        {timeZones.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            sx={{
              width: "100%",
            }}
            label="Pick Meeting Date"
          />
        </DemoContainer>
      </LocalizationProvider>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["StaticTimePicker"]}>
          <DemoItem label="Pick Meeting Time">
            <TimePicker defaultValue={dayjs("2022-04-17T15:30")} />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>

      <Button
        onClick={handleModal}
        variant="contained"
        fullWidth
        sx={{ mt: "1rem" }}
      >
        Add Clock
      </Button>
    </div>
  );
};

export default AddUpdate;
