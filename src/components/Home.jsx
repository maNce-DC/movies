import React from "react";
import Slider from "./Slider";
import { styled } from "@mui/material/styles";
import Header from "./Header";
import TopRatedMovies from "./TopRatedMovies";
import Sidebar from "./Sidebar";
import Movies from "./Movies";
import { Box } from "@mui/material";
import light from "../assets/images/light.png";
import dark from "../assets/images/dark.png";
import Footer from "./Footed";

const MainSection = styled("main")(({ theme }) => ({
  display: "flex",
  width: "100%",
  maxWidth: "1440px",
  margin: "30px auto",
  backgroundImage: `url(${theme.background === "#ffffff" ? light : dark})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const SliderandMovieDiv = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "auto",
    marginLeft: "0",
  },
}));

const MoviePosterContainer = styled(Box)(({ theme }) => ({
  margin: "60px 0 0 195px",

  [theme.breakpoints.down("md")]: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    gap: "10px",
    margin: "100px 0 0 0",
  },
}));

const Home = () => {
  return (
    <>
      <Header />
      <MainSection className="MainSection">
        <Sidebar />
        <SliderandMovieDiv className="SliderAndMovieDiv">
          <Slider />
          <MoviePosterContainer className="MoviePosterContainer">
            <h2 className="MovieCardsTitle">Movies</h2>
            <Movies />
          </MoviePosterContainer>
        </SliderandMovieDiv>
      </MainSection>
      <TopRatedMovies />
      <Footer />
    </>
  );
};

export default Home;
