import React from 'react'
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const ToolComponent = () => {

   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      style={{
        position: "absolute",
        top: 150,
        left: matches?5:20,
        color: "#4B5665",
        width: matches?450:1000,
        display: "flex",
        justifyContent: matches?"left":"space-between",
        fontFamily: "Inter",
        fontWeight: 400,
        fontSize: 14,
        
      }}
    >
      <div style={{ width: matches?50:73, height: 20 }}>Tools</div>
      <div style={{ width: 106, height: 20 }}>AWS Builder</div>
      <div style={{ width: matches?100:73, height: 20 }}>Start Build</div>
      <div style={{ width: matches?120:100, height: 20 }}>Build Supplies</div>
      <div style={{ width: 94, height: 20,marginLeft:matches?5:0 }}>Tooling</div>
      <div style={{ width: matches?90:108, height: 20 }}>BlueHosting</div>
    </div>
  );
}

export default ToolComponent
