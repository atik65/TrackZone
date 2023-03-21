import { Grid } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import shortid from "shortid";
import Meeting from "../../components/Meeting/Meeting";

const Meetings = () => {
  const location = useLocation();
  const { meetings, timeZone } = location?.state;

  return (
    <div>
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
            <Grid key={shortid.generate()} xs={12} sm={12} md={12} lg={6} item>
              <Meeting meet={meet} timeZone={timeZone} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Meetings;
