import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const HostingComponent = () => {

   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      style={{
        position: "absolute",
        top: matches?150:190,
        left: 20,
        color: "#5C6874",
        width: matches?400:500,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "Inter",
        fontWeight: 400,
        fontSize: 13,
      }}
    >
      <div style={{ width: 40 }}>Home</div>
      <KeyboardArrowLeftIcon style={{ width: 20 }} />

      <div style={{ width: 98 }}>Hosting for all</div>
      <KeyboardArrowLeftIcon style={{ width: 20 }} />

      <div style={{ width: 56 }}>Hosting</div>
      <KeyboardArrowLeftIcon style={{ width: 20 }} />

      <div style={{ width: 64 }}>Hosting6</div>
      <KeyboardArrowLeftIcon style={{ width: 20 }} />

      <div style={{ width: 64 }}>Hosting5</div>
    </div>
  );
};

export default HostingComponent;
