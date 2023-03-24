import { Typography } from "@mui/joy";
import { Box, Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Meeting from "../../components/Meeting/Meeting";
import { ClocksContext } from "../../context/ClocksContextProvider";
const Meetings = () => {
  const { clocks } = useContext(ClocksContext);
  const location = useLocation();
  const { meetings: curMeetings, timeZone, clockID } = location?.state;

  const [meetings, setMeetings] = useState(curMeetings);

  useEffect(() => {
    setMeetings(clocks.find((c) => c.id == clockID).meetings);
  }, [clocks.find((c) => c.id == clockID).meetings]);

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
              px: "1rem",
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
          rowSpacing={"2rem"}
          sx={{
            mx: "auto",
            pr: "1rem",
            width: {
              xs: "98%",
              sm: "80%",
              md: "90%",
            },
          }}
        >
          {meetings?.map((meet) => {
            return (
              <Grid key={meet.id} xs={12} sm={12} md={6} lg={6} xl={4} item>
                <Meeting clockID={clockID} meet={meet} timeZone={timeZone} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </div>
  );
};

export default Meetings;
