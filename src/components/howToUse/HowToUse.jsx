import * as React from "react";

import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

export default function HowToUse() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = () => {
    setState(!state);
  };

  return (
    <div>
      <Box
        sx={{
          //   backgroundColor: "red",
          textAlign: "center",
          mb: "1rem",
        }}
      >
        <Button onClick={toggleDrawer}>
          What is TrackZone or How to use?{" "}
        </Button>
      </Box>
      <Drawer anchor={"top"} open={state} onClose={toggleDrawer}>
        <Box
          sx={{
            width: "80%",
            mx: "auto",
            py: "2rem",
            pb: "1rem",
            fontSize: "1.2rem",
            textAlign: "justify",
          }}
        >
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 18 }}
                color="text.secondary"
                gutterBottom
              >
                What is TrackZone
              </Typography>

              {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography> */}
              {/* <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography> */}

              <Typography>
                Suppose you have 3 international client . They lives in
                different location (USA, Australia, England). You have meetings
                everyday with those clients , but the meeting time is not fixed.
                When the clients fix a time they will let you know the meeting
                time. But the problem is , they will tell you the meeting time
                in their local timezone. For example , the Australian client
                fixed a meeting at 5.00 PM in australian time. So what will be
                the time of that meeting in your local area. How will remember
                all the meeting times with different time zone? <br /> <br />
                This is an application which is able to store meeting time based
                on specific timezone. It has various time zone such as UTC , PST
                , EST . User can create clock for specific timezone and can add
                meetings on that clock.
                <br />
                Each meeting will show the time of that meeting in selected
                clock timezone and local timezone also. It also shows the time
                difference of that selected timezone and users local timezone.
              </Typography>

              <Typography
                sx={{ fontSize: 16, mt: "1rem" }}
                color="text.secondary"
                gutterBottom
              >
                How to use?
              </Typography>

              <Typography>
                1. Create your default clock. <br />
                2. Create other clock in other timezone for each client. <br />
                3. Add meetings under client clock
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Button size="small">
                  <a
                    className="link"
                    target={"_blank"}
                    href="https://timezonedb.com/time-zones"
                  >
                    Learn More
                  </a>
                </Button>
              </Box>
              <Button size="small">
                <a
                  className="link"
                  target={"_blank"}
                  href="  https://www.facebook.com/atik.selfibazz"
                >
                  Contact developer
                </a>
              </Button>

              <Button onClick={toggleDrawer} variant="outlined" size="small">
                Close Drawer
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Drawer>
    </div>
  );
}
