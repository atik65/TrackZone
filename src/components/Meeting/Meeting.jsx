import { Typography } from "@mui/joy";
import { Button, Card, Chip } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import CustomModal from "../shared/customModal/CustomModal";

const Meeting = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

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
            label={"Time Zone: EST"}
            size="small"
            color="primary"
          />

          <Typography variant="h1" component={"h1"}>
            Meeting Title
          </Typography>

          <Typography variant="subtitle1" component={"subtitle"}>
            Time: 15:45 || Date: 05-06-2023
          </Typography>

          <Typography variant="p" component={"p"}>
            Time Difference from default Clock: 6:30 hour
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Button onClick={handleModal} size="small" variant="contained">
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

      <CustomModal open={modalOpen} handleModal={handleModal} />
    </div>
  );
};

export default Meeting;
