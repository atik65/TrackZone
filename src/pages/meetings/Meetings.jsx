import { Grid } from "@mui/material";
import React from "react";
import Meeting from "../../components/Meeting/Meeting";

const Meetings = () => {
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
        <Grid xs={12} sm={12} md={12} lg={6} item>
          <Meeting />
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={6} item>
          <Meeting />
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={6} item>
          <Meeting />
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={6} item>
          <Meeting />
        </Grid>
      </Grid>
    </div>
  );
};

export default Meetings;
