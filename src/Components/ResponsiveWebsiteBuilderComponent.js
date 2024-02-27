import React, { useEffect, useState } from "react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RatingComponent from "./RatingComponent";
import DoneIcon from "@mui/icons-material/Done";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const ResponsiveWebsiteBuilderComponent = (props) => {
   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down("sm"));
   
  return (
    <>
      <div>
        {props.number === 1 ? (
          <div
            style={{
              position: "relative",
              top: matches ? 180 : 200,
              width: 136,
              height: 34,
              backgroundColor: "#FF7724",
              borderRadius: "0px 8px 8px 0px",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <EmojiEventsIcon />
            <span
              style={{ fontFamily: "Inter", fontWeight: 400, fontSize: 16 }}
            >
              Best Choice
            </span>
          </div>
        ) : (
          <></>
        )}
      </div>

      <div>
        {props.heading === "SiteCraft 68-Inch Ultimate Web Design Studio" ? (
          <div
            style={{
              position: "relative",
              top: 200,
              width: 136,
              height: 34,
              backgroundColor: "#FF7724",
              borderRadius: "0px 8px 8px 0px",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DiamondOutlinedIcon />
            <span
              style={{ fontFamily: "Inter", fontWeight: 400, fontSize: 16 }}
            >
              Best Value
            </span>
          </div>
        ) : (
          <></>
        )}
      </div>

      <div
        style={{
          display: "flex",

          position: "relative",
          top: 220,
        }}
      >
        <div
          style={{
            fontFamily: "Inter",
            fontWeight: 400,
            fontSize: 20,
            color: "#626E79",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #E1E4E6",
            width: 44,
            height: 44,
            borderRadius: "50%",
            position: "relative",
            top: matches ? 5 : 10,
          }}
        >
          {" "}
          {props.number}
        </div>

        <div
          style={{
            width: matches ? 200 : 480,
            height: 72,
            fontFamily: "Inter",
            fontWeight: 700,
            fontSize: matches ? 12 : 16,
            position: "relative",
            left: 180,
          }}
        >
          {props.heading}-&nbsp;
          <span style={{ fontWeight: 400 }}>{props.description}</span>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          top: 220,
          left: 40,
          width: 1024,
          height: 255,
          fontFamily: "Inter",
          fontWeight: 700,
          fontSize: matches ? 12 : 16,
          display: "flex",
        }}
      >
        <div >
          <img src="/servicesImage.png" width="141" height="103" />
        </div>

        <div
          style={{
            width: matches ? 200 : 480,
            textAlign: matches ? "left" : <></>,
            color: "#2C384A",
            position: "relative",
            left: 45,
            top: matches ? 40 : 0,
          }}
        >
          Main highlights <br></br>
          <p style={{ fontWeight: 400 }}>
            {props.heading === "CDK Resposive Builder" ? (
              <div
                style={{
                  width: matches ? 200 : 505,
                  height: 116,
                  backgroundColor: "#FFF4ED",
                  borderRadius: 12,
                  padding: matches ? 8 : 20,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: 240,
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 28,
                      borderRadius: 4,
                      background: "#fff",
                      position: "relative",
                      top: 5,
                      textAlign: "center",
                      color: "#1B88F4",
                    }}
                  >
                    {" "}
                    9.9{" "}
                  </div>
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 400,
                      fontFamily: "Inter",
                      color: "#4B5665",
                      width: 196,
                    }}
                  >
                    Building responsive
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: 240,
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 28,
                      borderRadius: 4,
                      background: "#fff",
                      position: "relative",
                      top: 10,
                      textAlign: "center",
                      color: "#1B88F4",
                    }}
                  >
                    {" "}
                    8.9{" "}
                  </div>
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 400,
                      fontFamily: "Inter",
                      color: "#4B5665",
                      width: 196,
                      position: "relative",
                      top: 5,
                    }}
                  >
                    Cool
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: 240,
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 28,
                      borderRadius: 4,
                      background: "#fff",
                      position: "relative",
                      top: 15,
                      textAlign: "center",
                      color: "#1B88F4",
                    }}
                  >
                    {" "}
                    8.9{" "}
                  </div>
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 400,
                      fontFamily: "Inter",
                      color: "#4B5665",
                      width: 196,
                      position: "relative",
                      top: 10,
                    }}
                  >
                    Docs
                  </span>
                </div>
              </div>
            ) : (
              <>[What You Get]: {props.highlightContent}</>
            )}
          </p>
        </div>
      </div>

      {props.heading === "CDK Resposive Builder" ? (
        <div
          style={{
            fontFamily: "Inter",
            fontWeight: 400,
            fontSize: 16,
            color: "#2C384A",
            position: "relative",
            left: 220,
            top: 180,
          }}
        >
          <div style={{ width: 112 }}>Why we love it</div>
          <div
            style={{
              width: 112,
              color: "#4B5665",
              position: "relative",
              fontSize: 15,
              top: 10,
              display: "flex",
              justifyContent: "space-between",
              width: 215,
            }}
          >
            <div
              style={{
                backgroundColor: "#EBF5FF",
                width: 24,
                height: 24,
                borderRadius: "50%",
              }}
            >
              <DoneIcon style={{ color: "#0855A1" }} />
            </div>
            <div style={{ width: 178 }}> Documentation</div>
          </div>

          <div
            style={{
              color: "#4B5665",
              position: "relative",
              fontSize: 15,
              top: 20,
              display: "flex",
              justifyContent: "space-between",
              width: 150,
            }}
          >
            <div
              style={{
                backgroundColor: "#EBF5FF",
                width: 24,
                height: 24,
                borderRadius: "50%",
              }}
            >
              {" "}
              <DoneIcon style={{ color: "#0855A1" }} />
            </div>
            <div style={{ width: 112 }}>Easy Use</div>
          </div>

          <div
            style={{
              color: "#4B5665",
              position: "relative",
              fontSize: 15,
              top: 30,
              display: "flex",
              justifyContent: "space-between",
              width: 150,
            }}
          >
            <div
              style={{
                backgroundColor: "#EBF5FF",
                width: 24,
                height: 24,
                borderRadius: "50%",
              }}
            >
              {" "}
              <DoneIcon style={{ color: "#0855A1" }} />
            </div>
            <div style={{ width: 112 }}> Out of box</div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {matches ? (
        <></>
      ) : (
        <div
          style={{
            position: "relative",
            top: props.heading === "CDK Resposive Builder" ? 220 : 70,

            left: 225,
            fontFamily: "Inter",
            fontWeight: 400,
            fontSize: 16,
            color: "#1B88F4",
            display: "flex",
            alignItems: "center",
            marginTop: matches ? 40 : <></>,
          }}
        >
          Show more <ExpandMoreIcon />
        </div>
      )}
    </>
  );
};

export default ResponsiveWebsiteBuilderComponent;
