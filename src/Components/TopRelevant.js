import React from "react";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const TopRelevant = () => {

   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down("sm"));


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection:matches?'column':'row',
        fontFamily: "Inter",
        fontSize: 14,
        fontWeight: 400,
        color: "#727D87",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 280,
          top: 90,
          left: matches?5:10,

          display: "flex",
          alignItems: "center",
        }}
      >
        <TaskAltRoundedIcon /> &nbsp;
        <span style={{ marginBottom: 4 }}>Last Updated</span> &nbsp; - &nbsp;
        <span style={{ marginBottom: 4 }}> February 22, 2020</span>
      </div>

    {matches?<></>:  <div
        style={{
          position: "absolute",
          width: 208,
          top: 90,
          left: 380,

          display: "flex",
          alignItems: "center",
        }}
      >
        <ErrorOutlineIcon /> &nbsp;
        <span style={{ marginBottom: 4 }}>Advertising Disclosure</span>
      </div>
}
      <div
        style={{
          position: "absolute",
          width: 300,
          top: 90,
         
          left: matches?280:900,
          display: "flex",
          alignItems: "center",
        }}
      >
        <span>Top Relevant</span> &nbsp;
        <ExpandMoreIcon />
      </div>

    </div>
  );
};

export default TopRelevant;
