import { Typography } from "@mui/joy";
import { Button, MenuItem, TextField } from "@mui/material";
import React from "react";

import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import useForm from "../../../hooks/useForm";
import { Box } from "@mui/system";

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

const AddUpdate = ({ handleModal, modalState }) => {
  // const { formState, handleSubmit, handleBlur, handleChange, handleFocus } =
  //   useForm(
  //     {
  //       clockTitle: "",
  //       meetingTitle: "",
  //       timeZone: "GMT",

  //       meetingDate: new Date().toISOString(),
  //       meetingTime: new Date().toISOString(),
  //     },
  //     true
  //   );
  const { formState, handleSubmit, handleBlur, handleChange, handleFocus } =
    useForm(
      {
        ...modalState.formData,
      },
      true
    );

  const submitHandler = ({ errors, hasError, values }) => {
    handleModal(modalState.method, modalState.modalFor);
    console.log(values);
  };

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

      <form onSubmit={(e) => handleSubmit(e, submitHandler)}>
        {modalState.modalFor == "clock" && (
          <Box>
            <TextField
              sx={{ mb: "1.2rem" }}
              id="outlined-clock-title"
              placeholder="Clock Title"
              label="Clock Title"
              size="small"
              fullWidth
              name="clockTitle"
              value={formState?.clockTitle.value}
              onChange={(e) => handleChange(e)}
              onBlur={(e) => handleBlur(e)}
              onFocus={(e) => handleFocus(e)}
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
              name="timeZone"
              onBlur={() =>
                handleBlur({
                  target: {
                    name: "timeZone",
                  },
                })
              }
              onFocus={() =>
                handleFocus({
                  target: {
                    name: "timeZone",
                  },
                })
              }
              onChange={(e) => handleChange(e)}
              value={formState.timeZone.value}
            >
              {timeZones.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        )}

        {modalState.modalFor == "meeting" && (
          <Box>
            <TextField
              sx={{ mb: "1.2rem" }}
              id="outlined-meeting-title"
              placeholder="Meeting Title"
              label="Meeting Title"
              size="small"
              fullWidth
              name="meetingTitle"
              value={formState?.meetingTitle.value}
              onChange={(e) => handleChange(e)}
              onBlur={(e) => handleBlur(e)}
              onFocus={(e) => handleFocus(e)}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <div
                  style={{
                    width: "100%",
                  }}
                  onFocus={() =>
                    handleFocus({
                      target: {
                        name: "meetingDate",
                      },
                    })
                  }
                  onBlur={() =>
                    handleBlur({
                      target: {
                        name: "meetingDate",
                      },
                    })
                  }
                >
                  <DatePicker
                    value={dayjs(formState.meetingDate.value)}
                    onChange={(newDate) =>
                      handleChange({
                        target: {
                          value: newDate,
                          name: "meetingDate",
                        },
                      })
                    }
                    sx={{
                      width: "100%",
                    }}
                    label="Pick Meeting Date"
                  />
                </div>
              </DemoContainer>
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["StaticTimePicker"]}>
                <DemoItem label="Pick Meeting Time">
                  <TimePicker
                    value={dayjs(formState.meetingTime.value)}
                    onChange={(newValue) =>
                      handleChange({
                        target: {
                          name: "meetingTime",
                          value: newValue,
                        },
                      })
                    }
                    defaultValue={dayjs("2022-04-17T15:30")}
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
          </Box>
        )}

        <Button type="submit" variant="contained" fullWidth sx={{ mt: "1rem" }}>
          Add Clock
        </Button>
      </form>
    </div>
  );
};

export default AddUpdate;
