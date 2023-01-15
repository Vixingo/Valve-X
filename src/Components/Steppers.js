import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { Container, Typography } from "@mui/material";

// const QontoConnector = styled(StepConnector)(({ theme }) => ({
//     [`&.${stepConnectorClasses.alternativeLabel}`]: {
//         top: 10,
//         left: "calc(-50% + 16px)",
//         right: "calc(50% + 16px)",
//     },
//     [`&.${stepConnectorClasses.active}`]: {
//         [`& .${stepConnectorClasses.line}`]: {
//             borderColor: "#1A1924",
//         },
//     },
//     [`&.${stepConnectorClasses.completed}`]: {
//         [`& .${stepConnectorClasses.line}`]: {
//             borderColor: "#1A1924",
//         },
//     },
//     [`& .${stepConnectorClasses.line}`]: {
//         borderColor:
//             theme.palette.mode === "dark" ? theme.palette.grey[800] : "#1A1924",
//         borderTopWidth: 3,
//         borderRadius: 1,
//     },
// }));

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#1A1924",
  display: "flex",
  height: 22,
  alignItems: "center",

  ...(ownerState.active && {
    color: "#1A1924",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#1A1924",
    zIndex: 1,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 50,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#1A1924",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#1A1924",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 2,
    border: 0,
    backgroundColor: theme.palette.mode === "dark" ? "#1A1924" : "#1A1924",
    borderRadius: 1,
    "@media(max-width:600px)": {
      height: 0,
    },
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor: "#000",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid #1A1924",
  padding: "50px",

  ...(ownerState.active && {
    backgroundColor: "#000",
  }),
  ...(ownerState.completed && {
    backgroundColor: "#000",
    color: "#fff",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <img src="./img/coins.png" alt="" />,
    2: <img src="./img/share.png" alt="" />,
    3: <img src="./img/account.png" alt="" />,
    4: <img src="./img/right.png" alt="" />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = [
  "You enter amount and recipient address",
  "We generate an expirable link ",
  "Recipient enters wallet on the link for confimation",
  "Your payment or NFT gets sent",
];

export default function Steppers() {
  return (
    <Container sx={{ paddingTop: "100px" }}>
      <Typography
        sx={{
          fontSize: "40px",
          fontWeight: "600",
          textAlign: "center",
          marginBottom: "25px",
        }}
      >
        How it works
      </Typography>
      <Stack sx={{ width: "100%" }} spacing={4}>
        <Stepper
          alternativeLabel
          activeStep={3}
          connector={<ColorlibConnector />}
          sx={{
            "@media(max-width:600px)": {
              flexDirection: "column",
              alignItems: "center",
            },
          }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon} sx={{ mb: 4 }}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>
    </Container>
  );
}
