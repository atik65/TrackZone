import { Typography } from "@mui/joy";
import { Button, Card, Chip } from "@mui/material";
import { Box } from "@mui/system";
import { format } from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import { ClocksContext } from "../../context/ClocksContextProvider";
import { ModalContext } from "../../context/ModalContextProvider";
import { timeConvertToDefaultZone, timeDifference } from "../../utils/clock";

const Meeting = ({ meet: curMeeting, timeZone, clockID }) => {
  const { clocks, deleteMeeting } = useContext(ClocksContext);
  const { handleModal } = useContext(ModalContext);

  const [meet, setMeet] = useState(curMeeting);

  console.log(timeZone);
  useEffect(
    () => {
      setMeet(
        clocks
          .find((c) => c.id == clockID)
          .meetings.find((m) => m.id == curMeeting.id)
      );
    },
    [
      clocks
        .find((c) => c.id == clockID)
        .meetings.find((m) => m.id == curMeeting.id),
    ]
    // clocks[0].timeZone
  );

  console.log(clocks);

  return (
    <div>
      <Card
        sx={{
          p: "1rem",
          // display: "grid",
          // gridTemplateColumns: " 1fr",
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

          <Typography
            sx={{
              backgroundColor: "#98989817",
              mr: "5px",
            }}
            variant="subtitle1"
            component={"h1"}
          >
            Time of this Clock: ({timeZone})
            <br /> Time:
            {format(new Date(meet?.meetingTime), "hh:mm a")} || Date:
            {format(new Date(meet?.meetingDate), "dd-MM-yyyy")}
          </Typography>

          <Typography
            sx={{
              backgroundColor: "#98989817",
              mr: "5px",
              mt: "10px",
            }}
            variant="subtitle1"
            component={"h1"}
          >
            Time of Default Clock: ({clocks[0].timeZone})
            <br /> Time:
            {format(
              new Date(
                timeConvertToDefaultZone(
                  clocks[0].timeZone,
                  timeZone,
                  meet?.meetingTime
                )
              ),
              "hh:mm a"
            )}{" "}
            || Date:
            {format(
              new Date(
                timeConvertToDefaultZone(
                  clocks[0].timeZone,
                  timeZone,
                  meet?.meetingDate
                )
              ),
              "dd-MM-yyyy"
            )}
          </Typography>

          <Typography variant="p" component={"p"}>
            {timeDifference(clocks[0].timeZone, timeZone) < 0 &&
              `
              This clock is  ${
                timeDifference(clocks[0].timeZone, timeZone) * -1
              } hours Behind from Default clock ( ${timeDifference(
                clocks[0].timeZone,
                timeZone
              ).toFixed(2)} hours)
            `}
            {timeDifference(clocks[0].timeZone, timeZone) >= 0 &&
              `
              This clock is  ${timeDifference(
                clocks[0].timeZone,
                timeZone
              )} hours Ahead from Default clock ( + ${timeDifference(
                clocks[0].timeZone,
                timeZone
              ).toFixed(2)} hours)
            `}
          </Typography>
        </Box>

        <Box
          sx={{
            mt: "1rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Button
            onClick={() =>
              handleModal("update", "meeting", {
                ...meet,
                clockID,
              })
            }
            size="small"
            variant="contained"
          >
            Update Meeting
          </Button>
          <Button
            onClick={() => deleteMeeting(clockID, meet?.id)}
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
