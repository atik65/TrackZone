import { Typography } from "@mui/joy";
import { Button, Grid } from "@mui/material";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <Grid
        container
        sx={{
          justifyContent: "center",
          pt: "15px",
        }}
      >
        <Grid item>
          <Button
            sx={{
              display:
                location.pathname != "/" && location.pathname != "/clocks"
                  ? "block"
                  : "none",
            }}
          >
            <Link className="link" to={"/clocks"}>
              Go to Clocks
            </Link>
          </Button>
        </Grid>

        <Grid item>
          <Button
            onClick={() => navigate(-1)}
            sx={{
              display:
                location.pathname != "/" && location.pathname != "/clocks"
                  ? "block"
                  : "none",
            }}
          >
            Go Back
          </Button>
        </Grid>
      </Grid>

      <Typography
        sx={{
          fontSize: "2rem",
          fontWeight: 600,
          mb: "2rem",
          mt: "0",
          textAlign: "center",
        }}
      >
        Welcome to TrackZone App
      </Typography>
    </div>
  );
};

export default Nav;
