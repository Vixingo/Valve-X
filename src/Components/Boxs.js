import React from "react";
import { Typography, Box, Container, Grid, Button } from "@mui/material";

function Boxs() {
    return (
        <>
            <Container sx={{ paddingTop: "100px", paddingBottom: "100px" }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                backgroundColor: "#1A1924",
                                textAlign: "center",
                                borderRadius: "16px",
                                minHeight: "270px",

                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                padding: "15px",
                                margin: "0 30px",
                            }}
                        >
                            <Box sx={{ width: "70px", margin: "0 auto" }}>
                                <img
                                    style={{ width: "100%" }}
                                    src="./img/prevent.png"
                                    alt=""
                                />
                            </Box>
                            <Typography
                                sx={{ marginTop: "0 30px", fontSize: "22px" }}
                            >
                                Prevent double and triple checking
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                backgroundColor: "#1A1924",
                                textAlign: "center",
                                borderRadius: "16px",
                                minHeight: "270px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                margin: "0 30px",

                                padding: "10px",
                            }}
                        >
                            <Box sx={{ width: "70px", margin: "0 auto" }}>
                                <img
                                    style={{ width: "100%" }}
                                    src="./img/works.png"
                                    alt=""
                                />
                            </Box>
                            <Typography
                                sx={{ marginTop: "30px", fontSize: "22px" }}
                            >
                                Works with multiple wallets and cryptos
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                backgroundColor: "#1A1924",
                                textAlign: "center",
                                borderRadius: "16px",
                                minHeight: "270px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                padding: "10px",
                                margin: "0 30px",
                            }}
                        >
                            <Box sx={{ width: "70px", margin: "0 auto" }}>
                                <img
                                    style={{ width: "100%" }}
                                    src="./img/signal.png"
                                    alt=""
                                />
                            </Box>
                            <Typography
                                sx={{ marginTop: "30px", fontSize: "22px" }}
                            >
                                99% uptime across all supported networks
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Boxs;
