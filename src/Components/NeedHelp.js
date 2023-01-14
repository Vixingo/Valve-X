import React from "react";
import { Typography, Box, Container, Grid, Button } from "@mui/material";

function NeedHelp() {
  return (
    <>
      <Container sx={{ paddingTop: "150px" }}>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box>
                <Typography
                  variant="h3"
                  sx={{ fontSize: "40px", fontWeight: "600" }}
                >
                  Need help?
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    marginTop: "10px",
                    lineHeight: "25px",
                  }}
                >
                  Valve.x prevents creates a two-party verification system that
                  coiners from sending their funds to the wrong addresses.
                </Typography>
                <Typography
                  sx={{
                    fontSize: "22px",
                    fontWeight: "600",
                    marginTop: "25px",
                  }}
                >
                  Get in touch with Valve team
                </Typography>
                <Box>
                  <Button sx={{ fontSize: "14px", textTransform: "inherit" }}>
                    Community on Discord
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}></Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default NeedHelp;
