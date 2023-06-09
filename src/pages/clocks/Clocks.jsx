import Typography from "@mui/joy/Typography";
import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import Clock from "../../components/clock/Clock";
import { ClocksContext } from "../../context/ClocksContextProvider";
import { ModalContext } from "../../context/ModalContextProvider";

const Clocks = () => {
  const { clocks } = useContext(ClocksContext);

  const { handleModal } = useContext(ModalContext);

  return (
    <div>
      {clocks.length <= 0 && (
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
            No default clock, please add your default clock first.
          </Typography>
        </Box>
      )}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          px: "1rem",
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
          onClick={() => handleModal("create", "clock")}
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
          {clocks.length <= 0 ? "Add Default Clock" : "Add Clock"}
        </Button>
      </Box>

      {clocks.length > 0 && (
        <Grid
          sx={{
            mx: "auto",

            pr: "1rem",

            width: {
              xs: "98%",
              sm: "80%",
              md: "90%",
            },
          }}
          spacing={2}
          container
        >
          {clocks?.map((clock) => {
            return (
              <Grid key={clock.id} item xs={12} sm={6} md={4} xl={3}>
                <Clock clock={clock} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </div>
  );
};

export default Clocks;
