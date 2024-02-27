import React from "react";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const RelatedDealsComponent = () => {

     const theme = useTheme();
     const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div style={{ width: 333, height: 425 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          top:matches?2010: 2100,
          left:matches?40: 292,
        }}
      >
        <img src="/servicesImage.png" width="141" height="103" />
        <div style={{ display: "flex", color: "#074786" }}>
          <div
            style={{
              width: 80,
              height: 28,
              position: "relative",
              top: 50,
              left: 20,
              backgroundColor: "#F2F4F7",
              borderRadius: 8,
              fontSize: 13,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            20% Off
          </div>
          <div
            style={{
              width: 107,
              height: 28,
              position: "relative",
              top: 50,
              left: 30,
              backgroundColor: "#F2F4F7",
              borderRadius: 8,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 14,
            }}
          >
            Limited time{" "}
          </div>
        </div>
        <div
          style={{
            fontWeight: 700,
            fontFamily: "Inter",
            fontSize: 16,
            color: "#626E79",
            width: 107,
            textAlign: "center",
            position: "relative",
            top: 60,
          }}
        >
          Webbuilder 1
        </div>
        <div
          style={{
            fontWeight: 400,
            fontFamily: "Inter",
            fontSize: 16,
            color: "#626E79",
            width: 284,

            position: "relative",
            top: 70,
            left: 30,
          }}
        >
          Computer Modern clasic with wix support
        </div>

        <div style={{ display: "flex", width: 222 }}>
          <div
            style={{
              fontWeight: 400,
              fontFamily: "Inter",
              fontSize: 20,
              color: "#5C6874",
              width: 50,
              position: "relative",
              top: 80,
              left: 0,
            }}
          >
            $39.96
          </div>

          <div
            style={{
              fontWeight: 400,
              fontFamily: "Inter",
              fontSize: 14,
              color: "#9FA9B3",
              width: 48,
              position: "relative",
              top: 84,
              left: 30,
            }}
          >
            $49.96
          </div>

          <div
            style={{
              fontWeight: 400,
              fontFamily: "Inter",
              fontSize: 13,
              color: "#EF4C5D",
              width: 63,
              position: "relative",
              top: 84,
              left: 40,
            }}
          >
            (20% Off)
          </div>
        </div>

        <Button
          variant="contained"
          style={{
            width: 292,
            height: 48,
            position: "relative",
            top: 90,
            borderRadius: 12,
            backgroundColor: "#1B88F4",
            fontSize: 16,
            textTransform: "capitalize",
          }}
        >
          View Deal
        </Button>
      </div>
    </div>
  );
};

export default RelatedDealsComponent;
