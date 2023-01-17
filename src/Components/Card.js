import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Box, Button, Input } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 380, borderRadius: "20px", margin: "0 auto" }}>
            <CardContent sx={{ backgroundColor: "#1A1924" }}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Typography sx={{ fontSize: "14px" }}>Transfer</Typography>
                    <Typography
                        sx={{
                            fontSize: "14px",
                            color: "#007AFF",
                            textDecoration: "underline",
                        }}
                    >
                        Connect wallet
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "30px",
                    }}
                >
                    <Typography sx={{ fontSize: "40px" }}>1.582</Typography>
                    <Typography sx={{ fontSize: "40px" }}>ETH</Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "5px",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "14px",
                            color: "rgba(255, 255, 255, 0.23)",
                        }}
                    >
                        $1957.78
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "14px",
                            color: "rgba(255, 255, 255, 0.23)",
                        }}
                    >
                        Balance: 0
                    </Typography>
                </Box>
            </CardContent>

            <Box sx={{ position: "relative" }}>
                <CardActions
                    disableSpacing
                    sx={{
                        backgroundColor: "#0F0E17",
                        paddingTop: "0",
                    }}
                >
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        sx={{
                            margin: "0 auto",
                            position: "absolute",
                            left: "50%",
                            transform: "translateX(-50%)",
                        }}
                    >
                        <ArrowDownwardIcon
                            sx={{
                                backgroundColor: "#007AFF",
                                width: "38px",
                                height: "38px",
                                borderRadius: "50%",
                                padding: "5px",
                            }}
                        />
                    </ExpandMore>
                </CardActions>
            </Box>
            <CardContent sx={{ backgroundColor: "#0F0E17" }}>
                <Box
                    component="form"
                    sx={{
                        "& > :not(style)": { width: "100%" },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <input
                        style={{
                            borderRadius: "20px",
                            padding: "10px 0 10px 20px",
                            outline: "none",
                            border: "1px solid #fff",
                            backgroundColor: "transparent",
                            color: "#fff",
                            marginTop: "15px",
                            height: "48px",
                            fontSize: "14px",
                            fontFamily: "Poppins",
                        }}
                        placeholder="Enter Recipient Address"
                    />
                    <Button
                        sx={{
                            backgroundColor: "#007AFF",
                            width: "100%",
                            marginTop: "20px",
                            color: "#fff",
                            padding: "10px",
                            borderRadius: "20px",
                            textTransform: "inherit",
                            height: "48px",
                            "&:hover": {
                                backgroundColor: "#007AFF",
                            },
                        }}
                    >
                        <ContentCopyIcon sx={{ marginRight: "5px" }} />{" "}
                        <Typography>Copy confirmation link</Typography>
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
}
