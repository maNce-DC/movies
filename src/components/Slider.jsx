import React from "react";
import slide1 from "../assets/images/slide1.png";
import slide2 from "../assets/images/slide2.webp";
import slide3 from "../assets/images/slide3.jpg";
import slide4 from "../assets/images/slide4.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { styled } from "@mui/material/styles";
import { Avatar, Box } from "@mui/material";

const SliderContainer = styled("div")(({ theme }) => ({
  borderRadius: "20px",
  width: "770px",
  height: "350px",
  position: "relative",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "auto",
  },
}));

const SliderImageDiv = styled("div")(() => ({
  height: "100%",
  width: "100%",
}));

const CarouselMainDiv = styled(Box)(({ theme }) => ({
  width: "770px",
  height: "350px",
  marginLeft: "195px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "auto",
    marginLeft: "0",
  },
}));

export const WatchListPlus = styled("span")(({ theme }) => ({
  fontSize: "30px",
  color: "#f9f9f9",
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
  },
}));
export const WatchListText = styled("span")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
  },
}));

export const WatchListButton = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  bottom: "20px",
  left: "20px",
  width: "160px",
  height: "57px",
  borderRadius: "15px",
  padding: "19px 25px",
  backgroundColor: "rgba(249, 249, 249, 0.2)",
  gap: "10px",
  fontFamily: "Lato, sans_serif",
  fontWeight: "800",
  fontSize: "18px",
  lineHeight: "18px",
  color: "rgba(249, 249, 249, 1)",
  "&:hover": {
    boxShadow:
      "0px 4px 6px -1px rgba(0, 0, 0, 0.2), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
    opacity: "0.8",
    cursor: "pointer",
  },

  [theme.breakpoints.down("md")]: {
    width: "100px",
    height: "40px",
    fontSize: "12px",
    justifyContent: "space-between",
  },
}));

export const WatchNow = styled(Box)(({ theme }) => ({
  width: "190px",
  height: "57px",
  borderRadius: "15px",
  color: "#000000",
  backgroundColor: "#f8b319",
  bottom: "20px",
  right: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "19px, 47px, 19px, 47px",
  gap: "10px",
  fontFamily: "Lato, sans_serif",
  fontWeight: "800",
  fontSize: "18px",
  lineHeight: "18px",
  "&:hover": {
    boxShadow:
      "0px 4px 6px -1px rgba(0, 0, 0, 0.2), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
    opacity: "0.8",
    cursor: "pointer",
  },
  [theme.breakpoints.down("md")]: {
    width: "110px",
    height: "40px",
    fontSize: "12px",
  },
}));

const Slider = () => {
  return (
    <CarouselMainDiv className="slider">
      <SliderContainer className="SliderContainer">
        <Carousel showThumbs={false} autoPlay infiniteLoop>
          <SliderImageDiv>
            <Avatar
              src={slide1}
              alt="Slide 1"
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "20px",
              }}
            />
          </SliderImageDiv>
          <SliderImageDiv>
            <Avatar
              src={slide2}
              alt="Slide 2"
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "20px",
              }}
            />
          </SliderImageDiv>
          <SliderImageDiv>
            <Avatar
              src={slide3}
              alt="Slide 3"
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "20px",
              }}
            />
          </SliderImageDiv>
          <SliderImageDiv>
            <Avatar
              src={slide4}
              alt="Slide 4"
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "20px",
              }}
            />
          </SliderImageDiv>
        </Carousel>
        <WatchListButton sx={{ position: "absolute" }}>
          <WatchListPlus>+</WatchListPlus>
          <WatchListText>Watchlist</WatchListText>
        </WatchListButton>
        <WatchNow sx={{ position: "absolute" }}>Watch Now</WatchNow>
      </SliderContainer>
    </CarouselMainDiv>
  );
};

export default Slider;
