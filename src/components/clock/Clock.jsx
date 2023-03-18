import { Typography } from "@mui/joy";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { Link } from "react-router-dom";
import CustomModal from "../shared/customModal/CustomModal";

const Clock = () => {
  const theme = useTheme();
  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

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
              <Link className="link" to={"/meetings/1"}>
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
            onClick={handleModal}
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
            onClick={handleModal}
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

      <CustomModal open={modalOpen} handleModal={handleModal} />
    </div>
  );
};

export default Clock;
