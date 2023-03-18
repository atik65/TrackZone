import Typography from "@mui/joy/Typography";
import { Button, Grid, Modal } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Clock from "../../components/clock/Clock";
import CustomModal from "../../components/shared/customModal/CustomModal";

const Clocks = () => {
  const clocks = [1];

  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <div>
      {clocks.length <= 0 && (
        <Box
          sx={{
            display: "grid",
            placeItems: "center",
          }}
        >
          <Typography level="h5">
            No default clock, please add your default clock first.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              mt: "1rem",
            }}
          >
            Add Clock
          </Button>
        </Box>
      )}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          pl: "1rem",
          mb: "2rem",
          mx: "auto",
          width: {
            xs: "98%",
            sm: "80%",
            md: "90%",
          },
        }}
      >
        <Button
          onClick={handleModal}
          sx={{
            width: {
              xs: "100%",
              sm: "100%",
              md: "100%",
              lg: "50%",
            },
          }}
          size="large"
          variant="contained"
          color="primary"
        >
          Add Clock
        </Button>
      </Box>

      {clocks.length > 0 && (
        <Grid
          sx={{
            mx: "auto",
            width: {
              xs: "98%",
              sm: "80%",
              md: "90%",
            },
          }}
          spacing={2}
          container
        >
          <Grid item xs={12} sm={6} md={4} xl={3}>
            <Clock />
          </Grid>
          <Grid item xs={12} sm={6} md={4} xl={3}>
            <Clock />
          </Grid>
          <Grid item xs={12} sm={6} md={4} xl={3}>
            <Clock />
          </Grid>
          <Grid item xs={12} sm={6} md={4} xl={3}>
            <Clock />
          </Grid>
          <Grid item xs={12} sm={6} md={4} xl={3}>
            <Clock />
          </Grid>
        </Grid>
      )}

      <CustomModal open={modalOpen} handleModal={handleModal} />
    </div>
  );
};

export default Clocks;
