import React from "react";
import { Grid } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Footer = () => {
   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      style={{
        position: "relative",
        top: 2100,
        width: 1592,
        height: 452,
        backgroundColor: "#212731",
      }}
    >
      <Grid
        container
        spacing={1}
        style={{
          padding: 60,
          width: 1000,
          color: "#B6BDC4",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={matches?12:5}
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            fontWeight: 400,
            fontSize: 13,
            fontFamily: "Inter",
          }}
        >
          <div
            style={{
              width: 102,
              textTransform: "uppercase",
              marginBottom: 10,
              fontSize: 16,
              color: "#fff",
            }}
          >
            Categories
          </div>
          <div>Web Builder</div>
          <div>Hosting</div>
          <div>Data Center</div>
          <div>Robotic-Automation</div>
        </Grid>

        <Grid
          item
          xs={matches?12:5}
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            fontWeight: 400,
            fontSize: 13,
            fontFamily: "Inter",
          }}
        >
          <div
            style={{
              width: 53,
              textTransform: "uppercase",
              marginBottom: 10,
              fontSize: 16,
              color: "#fff",
            }}
          >
            Contact
          </div>
          <div>Contact</div>
          <div>Privacy Policy</div>
          <div>Terms Of Services</div>
          <div>Categories</div>
          <div>About</div>
        </Grid>

        <Grid
          item
          xs={matches?12:2}
          style={{
            display: "flex",
            alignItems: "center",

            width: 100,
            color: "#D1D6DA",
            fontSize: 13,
          }}
        >
          United States{" "}
          <span style={{ marginTop: 2 }}>
            <ExpandMoreIcon />
          </span>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
