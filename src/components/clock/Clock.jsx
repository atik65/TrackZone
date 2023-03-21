import { Typography } from "@mui/joy";
import { Button, Card, CardContent, CardMedia, Chip } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { ModalContext } from "../../context/ModalContextProvider";

const Clock = () => {
  const { modalClose, modalState, handleModal } = useContext(ModalContext);
  return (
    <div>
      <Card
        sx={{ pr: "1rem", display: "grid", gridTemplateColumns: "3fr 2fr" }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Chip
              sx={{
                mb: "1rem",
              }}
              label="Default Clock"
              color="primary"
              size="small"
              variant="filed"
            />

            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              15:24 <br />
              01-03-2023
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <Button>
              <Link
                className="link"
                to="/meetings/1"
                state={{
                  timeZone: "PST",
                  meetings: [
                    {
                      meetingTitle: "hello",
                      meetingTime: new Date().toISOString(),
                      meetingDate: new Date().toISOString(),
                      difference: 6,
                    },
                  ],
                }}
              >
                All Meetings (4)
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
          <Button
            onClick={() => handleModal("create", "meeting")}
            variant="outlined"
            color="primary"
            size="small"
            sx={{
              mt: "1rem",
            }}
          >
            Add Meeting
          </Button>

          <Button
            onClick={() =>
              handleModal("update", "clock", {
                clockTitle: "",
                timeZone: "GMT",
              })
            }
            variant="outlined"
            color="success"
            size="small"
            sx={{
              mb: "1rem",
              mt: "1rem",
            }}
          >
            Update Clock
          </Button>
          <Button size="small" variant="outlined" color="error">
            Delete Clock
          </Button>
        </CardMedia>
      </Card>
    </div>
  );
};

export default Clock;
