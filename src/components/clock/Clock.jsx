import { Typography } from "@mui/joy";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
} from "@mui/material";
import { Box } from "@mui/system";
import { format } from "date-fns";
import React, { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { ClocksContext } from "../../context/ClocksContextProvider";

import { ModalContext } from "../../context/ModalContextProvider";
import { timeConvert } from "../../utils/clock";

const Clock = ({ clock: baseClock }) => {
  const [clock, setClock] = useState(baseClock);
  const { handleModal } = useContext(ModalContext);
  const { deleteClock } = useContext(ClocksContext);

  useEffect(() => {
    const clockTimeout = setTimeout(() => {
      let newClock = {
        ...baseClock,
      };

      newClock.clockTime = format(
        new Date(timeConvert(clock.timeZone)),
        "hh:mm:ss a"
      );

      newClock.clockDate = format(
        new Date(timeConvert(clock.timeZone)),
        "dd MMMM yyyy"
      );

      setClock(newClock);
    }, 1000);
    return () => {
      clearTimeout(clockTimeout);
    };
  }, [clock.clockTime]);

  return (
    <div>
      <Card
        sx={{
          pr: "1rem",
          display: "grid",
          gridTemplateColumns: "3fr 2fr",
          minHeight: "205px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto", pt: "0.5rem", pb: "0.5rem" }}>
            <Typography
              sx={{
                fontWeight: "600",
                textTransform: "uppercase",
              }}
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {clock.clockTitle}
            </Typography>

            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {clock.clockTime} <br />
              {clock.clockDate}
            </Typography>
          </CardContent>
          <Box
            sx={{ display: "flex", alignItems: "center", pl: 1, pb: "1rem" }}
          >
            <Button>
              <Link
                className="link"
                to={`/meetings/${clock.id}`}
                state={{
                  timeZone: clock.timeZone,
                  meetings: clock.meetings,
                }}
              >
                All Meetings ({clock.meetings.length})
              </Link>
            </Button>
          </Box>
        </Box>
        <CardMedia
          component={"div"}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <Chip
            sx={{
              mt: "0.5rem",
            }}
            label={`${clock.timeZone}`}
            color="primary"
            size="small"
            variant="filed"
          />

          <Chip
            sx={{
              mb: "0.5rem",
              mt: "0.5rem",
            }}
            label={`${clock.clockType} clock`}
            color="primary"
            size="small"
            variant="filed"
          />

          <Button
            onClick={() =>
              handleModal("create", "meeting", {
                ...clock,
              })
            }
            variant="outlined"
            color="primary"
            size="small"
            sx={{
              mt: "0.5rem",
            }}
          >
            Add Meeting
          </Button>

          <Button
            onClick={() =>
              handleModal("update", "clock", {
                ...clock,
              })
            }
            variant="outlined"
            color="success"
            size="small"
            sx={{
              mb: "0.5rem",
              mt: "0.5rem",
            }}
          >
            Update Clock
          </Button>
          {clock.clockType != "Default" && (
            <Button
              onClick={() => deleteClock(clock.id)}
              sx={{
                mb: "1rem",
              }}
              size="small"
              variant="outlined"
              color="error"
            >
              Delete Clock
            </Button>
          )}
        </CardMedia>
      </Card>
    </div>
  );
};

export default Clock;
