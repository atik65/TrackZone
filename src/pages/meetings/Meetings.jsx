import { Typography } from "@mui/joy";
import { Box, Grid } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import shortid from "shortid";
import Meeting from "../../components/Meeting/Meeting";

const Meetings = () => {
  const location = useLocation();
  const { meetings, timeZone } = location?.state;

  return (
    <div>
      {meetings.length <= 0 && (
        <Box
          sx={{
            display: "grid",
            placeItems: "center",
          }}
        >
          <Typography
            sx={{
              mb: 3,
            }}
            level="h5"
          >
            No meetings under this clock, please add meetings first.
          </Typography>
        </Box>
      )}

      {meetings.length > 0 && (
        <Grid
          container
          spacing={"1rem"}
          sx={{
            mx: "auto",
            width: {
              xs: "98%",
              sm: "80%",
              md: "90%",
            },
          }}
        >
          {meetings.map((meet) => {
            return (
              <Grid key={meet.id} xs={12} sm={12} md={12} lg={6} item>
                <Meeting meet={meet} timeZone={timeZone} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </div>
  );
};

export default Meetings;
