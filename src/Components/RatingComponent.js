import React,{useState} from "react";
import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";

const RatingComponent = (props) => {
console.log(props.stars)
 const [stars,setStars]=useState(props.stars);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
     
      }}
    >
      <div
        style={{
          width: 135,
          height: 118,
          position: "relative",
          left: 400,
          backgroundColor: "#F3F9FF",
          borderRadius: "0px 0px 8px 8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          fontWeight: 400,
          fontFamily: "Inter",
          fontSize: 32,
          color: "#074786",
          padding: 10,
        }}
      >
        <div style={{ marginBottom: 10 }}>{props.rating}</div>
        <div style={{ fontSize: 14 }}>{props.text}</div>
        <div style={{ width: 120, height: 11 }}>
         <StarIcon style={{ color: "yellow" }} />
         <StarIcon style={{ color: "yellow" }} />
         <StarIcon style={{ color: "yellow" }} />
         <StarIcon style={{ color: "yellow" }} />
         <StarIcon style={{ color: "yellow" }} />
        </div>
      </div>
      <div style={{ position: "relative", left: 400,top:30,fontSize:16 }}>
        {" "}
        <Button
          variant="contained"
          style={{
            width: 232,
            height: 48,
            borderRadius: 12,
            backgroundColor: "#1B88F4",
            textTransform: "capitalize",
          }}
        >
          View
        </Button>
      </div>
    </div>
  );
};

export default RatingComponent;
