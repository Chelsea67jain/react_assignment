import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useStyles } from "./HeaderCss";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header = () => {
  const classes = useStyles();
 const theme = useTheme();
 const matches = useMediaQuery(theme.breakpoints.down("sm"));
 
  return (
    <div
      style={{
        width: matches ? "100%" : 1614,
        height: 64,
        backgroundColor: "#212731",
      }}
    >
      <div
        style={{
          border: "1px solid #E1E4E6",
          width: matches ? 180 : 258,
          backgroundColor: "#fff",
          height: 37,
          borderRadius: 8,
          position: "absolute",
          top: 14,
          left: matches ? 10 : 480,
        }}
      >
        <div style={{ position: "relative", top: "9px", left: "10px" }}>
          <SearchIcon />
        </div>
      </div>

      <div
        style={{
          color: "#D1D6DA",
          fontFamily: "Inter",
          fontWeight: 400,
          fontSize: matches ? 10 : 14,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 23,
            left: matches ? 200 : 817,
            width: 73,
          }}
        >
          Categories
        </div>
        <div
          style={{
            position: "absolute",
            width: 142,
            top: 23,
            left: matches ? 265 : 943,
           
          }}
        >
          Website Builders
        </div>
        <div
          style={{
            position: "absolute",
            width: 91,
            top: 23,
            left: matches ? 360 : 1138,
            
          }}
        >
          Today's deals
        </div>
      </div>
    </div>
  );
};

export default Header;
