import React from "react";
import { Typography, Box, Container, Grid, Button } from "@mui/material";

function NeedHelp() {
  return (
    <>
      <Container sx={{ paddingTop: "150px", paddingBottom: "80px" }}>
        <Box sx={{ padding: "30px", border: "2px solid #1A1924" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
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
                  <Button
                    sx={{
                      fontSize: "14px",
                      textTransform: "inherit",
                      marginTop: "20px",
                    }}
                  >
                    <img
                      style={{ marginRight: "10px" }}
                      src="./img/discord.png"
                      alt=""
                    />{" "}
                    Community on Discord
                  </Button>
                </Box>
                <Box>
                  <Button
                    sx={{
                      fontSize: "14px",
                      textTransform: "inherit",
                      marginTop: "20px",
                    }}
                  >
                    <img
                      style={{ marginRight: "10px" }}
                      src="./img/telegram.png"
                      alt=""
                    />{" "}
                    Official Telegram channel
                  </Button>
                </Box>
                <Box>
                  <Button
                    sx={{
                      fontSize: "14px",
                      textTransform: "inherit",
                      marginTop: "20px",
                    }}
                  >
                    <img
                      style={{ marginRight: "10px" }}
                      src="./img/twitter.png"
                      alt=""
                    />{" "}
                    Follow us on Twitter
                  </Button>
                </Box>
                <Box>
                  <Button
                    sx={{
                      fontSize: "14px",
                      textTransform: "inherit",
                      marginTop: "20px",
                    }}
                  >
                    <img
                      style={{ marginRight: "10px" }}
                      src="./img/youtube.png"
                      alt=""
                    />{" "}
                    Youtube
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  backgroundColor: "#1A1924",
                  padding: "20px 50px 30px 20px",
                  borderRadius: "16px",
                }}
              >
                <Typography sx={{ fontSize: "22px", fontWeight: "600" }}>
                  Write to us
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <input
                    style={{
                      borderRadius: "16px",
                      padding: "10px 0 10px 20px",
                      outline: "none",
                      border: "2px solid #A5A1A1",
                      backgroundColor: "transparent",
                      color: "#fff",
                      marginTop: "15px",
                      width: "48%",
                      height: "48px",
                    }}
                    placeholder="Your name"
                  />
                  <input
                    type="email"
                    style={{
                      borderRadius: "16px",
                      padding: "10px 0 10px 20px",
                      outline: "none",
                      border: "2px solid #A5A1A1",
                      backgroundColor: "transparent",
                      color: "#fff",
                      marginTop: "15px",
                      width: "48%",
                      height: "48px",
                    }}
                    placeholder="Your email"
                  />
                </Box>
                <Box>
                  <textarea
                    type="text"
                    style={{
                      borderRadius: "16px",
                      padding: "10px 0 10px 20px",
                      outline: "none",
                      border: "2px solid #A5A1A1",
                      backgroundColor: "transparent",
                      color: "#fff",
                      marginTop: "15px",
                      width: "100%",
                      height: "150px",
                    }}
                    placeholder="Your message"
                  />
                </Box>
                <Button
                  sx={{
                    background:
                      "linear-gradient(94.32deg, #007AFF 1.74%, #A9148B 96.61%)",
                    borderRadius: "10px",
                    padding: "10px 30px",
                    marginTop: "20px",
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "400",
                    textTransform: "inherit",
                    height: "56px",
                  }}
                >
                  Send email
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container sx={{ paddingBottom: "20px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography sx={{ fontSize: "14px" }}>
              Copyright Valve.X 2023
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography sx={{ fontSize: "14px" }}>Privacy policy</Typography>
            <Typography sx={{ fontSize: "14px", padding: "0 40px" }}>
              Legal
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>Site map</Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default NeedHelp;
