import { Typography, Box, Container, Grid, Button } from "@mui/material";
import React from "react";

function Compatible() {
  return (
    <>
      <Container sx={{ paddingTop: "100px" }}>
        <Typography
          sx={{ fontSize: "24px", fontWeight: "600", textAlign: "center" }}
        >
          Compatible With
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "20px",
            "@media(max-width:600px)": {
              flexDirection: "column",
              alignItems: "basline",
              margin: "0 auto",
            },
          }}
        >
          <img className="Cripto_img" src="./img/ethereum.png" alt="" />

          <img className="Cripto_img" src="./img/polygon.png" alt="" />

          <img className="Cripto_img" src="./img/binance.png" alt="" />

          <img className="Cripto_img" src="./img/tether.png" alt="" />

          <img className="Cripto_img" src="./img/metamask.png" alt="" />
        </Box>
      </Container>
    </>
  );
}

export default Compatible;
