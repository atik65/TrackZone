import { Typography } from "@mui/joy";
import { Button, Card, Chip } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import { ModalContext } from "../../context/ModalContextProvider";

const Meeting = ({ meet, timeZone }) => {
  const { modalClose, modalState, handleModal } = useContext(ModalContext);

  return (
    <div>
      <Card
        sx={{
          p: "1rem",
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
        }}
      >
        <Box>
          <Chip
            sx={{ mb: "0.5rem" }}
            label={`Time Zone: ${timeZone}`}
            size="small"
            color="primary"
          />

          <Typography variant="h1" component={"h1"}>
            {meet?.meetingTitle}
          </Typography>

          <Typography variant="subtitle1" component={"h1"}>
            Time: {new Date(meet?.meetingTime).getHours()} :
            {new Date(meet?.meetingTime).getMinutes()} || Date:
            {new Date(meet?.meetingTime).getDate()}-{" "}
            {new Date(meet?.meetingTime).getMonth()}-
            {new Date(meet?.meetingTime).getFullYear()}
          </Typography>

          <Typography variant="p" component={"p"}>
            Time Difference from default Clock: {meet?.difference} hour
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Button
            onClick={() =>
              handleModal("update", "meeting", {
                meetingTitle: "",
                meetingDate: new Date().toISOString(),
                meetingTime: new Date().toISOString(),
              })
            }
            size="small"
            variant="contained"
          >
            Update Meeting
          </Button>
          <Button
            sx={{
              mt: "1rem",
            }}
            variant="outlined"
            color="error"
            size="small"
          >
            {" "}
            Delete Meeting{" "}
          </Button>
        </Box>
      </Card>
    </div>
  );
};

export default Meeting;
