import { Typography, Box, Container, Grid, Button } from "@mui/material";
import React from "react";
import Card from "./Card";

function Hero() {
  return (
    <>
      <Container sx={{ paddingTop: "100px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="h1"
                sx={{ fontSize: "54px", fontWeight: "700" }}
              >
                Validate & Confirm Recepient Wallet Addresses
              </Typography>
              <Typography
                sx={{ fontSize: "18px", fontWeight: "400", marginTop: "20px" }}
              >
                Eliminate manual double and triple checking. Never send crypto
                to the wrong address.
              </Typography>
              <Button
                sx={{
                  background:
                    "linear-gradient(94.32deg, #007AFF 1.74%, #A9148B 96.61%)",
                  borderRadius: "10px",
                  padding: "10px 30px",
                  marginTop: "50px",
                }}
              >
                <Typography
                  sx={{ color: "#fff", fontSize: "14px", fontWeight: "400" }}
                >
                  Go to app
                </Typography>
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Hero;
