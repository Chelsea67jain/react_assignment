import React from "react";
import Header from "../Components/Header";
import Divider from "@mui/material/Divider";
import TopRelevant from "../Components/TopRelevant";
import ToolComponent from "../Components/ToolComponent";
import HostingComponent from "../Components/HostingComponent";
import ResponsiveWebsiteBuilderComponent from "../Components/ResponsiveWebsiteBuilderComponent";
import Footer from "../Components/Footer";
import RatingComponent from "../Components/RatingComponent";
import RelatedDealsComponent from "../Components/RelatedDealsComponent";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function HomePage() {

   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Header />

      <div
        style={{
          position: "absolute",
          top: 102,
          left: matches?10:200,
          width: 1006,
          height: 155,
          color: "#2C384A",

          fontFamily: "Inter",
          fontWeight: 400,
          fontSize: matches?26:48,
        }}
      >
        Best Website builders in the US
        <Divider
          variant="fullWidth"
          color="#E1E4E6"
          style={{ position: "absolute", top: 72, width: 1024 }}
        />
        <TopRelevant />
        <Divider
          variant="fullWidth"
          color="#E1E4E6"
          style={{ position: "absolute", top: 130, width: 1024 }}
        />
       {matches?<></>:<ToolComponent />}
        <HostingComponent />
        <ResponsiveWebsiteBuilderComponent
          number={1}
          heading={"WixPro 72-Inch Responsive Website Builder"}
          description={
            "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
          }
          highlightContent={
            "Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
          }
        />
        {matches?<></>:<div style={{ position: "absolute", top: 300, width: 1024 }}>
          <RatingComponent rating={9.8} text={"Exceptional"} stars={5} />
        </div>
}
        <ResponsiveWebsiteBuilderComponent
          number={2}
          heading={"SiteCraft 68-Inch Ultimate Web Design Studio"}
          description={
            "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)"
          }
          highlightContent={
            "Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations."
          }
        />
        {matches?<></>:<div style={{ position: "absolute", top: 670, width: 1024 }}>
          <RatingComponent rating={9.5} text={"Excellent"} stars={5} />
        </div>
}

        <ResponsiveWebsiteBuilderComponent
          number={3}
          heading={"WixPro 72-Inch Responsive Website Builder"}
          description={
            "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
          }
          highlightContent={
            "Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
          }
        />
       {matches?<></>: <div style={{ position: "absolute", top: 1050, width: 1024 }}>
          <RatingComponent rating={9.3} text={"Exceptional"} stars={5} />
        </div>
}
        <ResponsiveWebsiteBuilderComponent
          number={4}
          heading={"CDK Resposive Builder"}
          description={
            "An extensive library of widgets and apps, and detailed step-by-step guides"
          }
          highlightContent={""}
        />
         {matches?<></>: <div style={{ position: "absolute", top: 1450, width: 1024 }}>
          <RatingComponent rating={9.1} text={"Very good"} stars={4} /> 
        </div>
}
      </div>
      <div
        style={{
          width: 495,
          position: "relative",
          top: matches?2000:2040,
          left:matches?5: 292,
          fonWeight: 400,
          fontFamily: "Inter",
          fontSize: matches?26:32,
          color: "#2C384A",
        }}
      >
        Related deals you might like for
      </div>
      <div style={{ display: "flex",flexDirection:matches?"column":"row" }}>
        <RelatedDealsComponent />
        <RelatedDealsComponent />
        <RelatedDealsComponent />
      </div>

      <div
        style={{
          position: "relative",
          top: 2060,
          left:matches?5: 350,
          fontWeight: 400,
          fontSize:matches?25: 32,
          color: "#5C6874",
          display: "flex",
          justifyContent: "space-between",
          width:matches?400:900
        }}
      >
        <div style={{ width: 398 }}>
          Sign up and get exclusive special deals
        </div>
        <div>
          {" "}
          <Button
            variant="contained"
            style={{
              width: 97,
              height: 52,
              position: "relative",
              top: 10,
             
              backgroundColor: "#1B88F4",
              fontSize: 16,
              textTransform: "capitalize",
              borderRadius: "0px, 12px, 12px, 0px",
            }}
          >
            Sign Up
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}

//https://www.figma.com/file/5aLPCUKLWbxISQReS6dHsu/NextJs%2FReactJs-Assignment?type=design&node-id=601-10&mode=design&t=GMoKHvM4I16PoWcs-0
