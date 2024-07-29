import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "../slices/movieSlice";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import RatingStars from "./RatingStars";
import Imdb from "../assets/images/imbd.png";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link } from "react-router-dom";
import {
  WatchListButton,
  WatchNow,
  WatchListPlus,
  WatchListText,
} from "./Slider";
import CircularWithValueLabel from "./CircularProgressWithLabel";

const MovieDetailsSection = styled("section")(() => ({
  position: "relative",
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    filter: "brightness(30%)",
    zIndex: -1,
  },
}));

const MovieDetailsDiv = styled(Box)(({ theme }) => ({
  maxWidth: "60%",
  gap: "70px",
  marginLeft: "100px",
  [theme.breakpoints.down("md")]: {
    marginLeft: "0px",
  },
}));

const MovieDetailsMainDiv = styled(Box)(() => ({
  display: "flex",
}));

const BackHomeDiv = styled("div")(() => ({
  fontFamily: "Lato, sans-serif",
  fontWeight: "800",
  fontSize: "28px",
  lineHeight: "28px",
  color: "rgb(255, 255, 255)",
  display: "flex",
  alignItems: "center",
  marginBottom: "30px",
  marginTop: "172px",
}));
const HomeButtonLink = styled(Link)(() => ({
  textDecoration: "none",
  color: "white",
  "&:hover": {
    opacity: "0.8",
  },
}));

const BackButton = styled("button")(() => ({
  width: "57px",
  height: "57px",
  marginRight: "20px",
  borderRadius: "15px",
  padding: "10px",
  backgroundColor: "rgba(249, 249, 249, 0.2)",
  cursor: "pointer",
  color: "white",
  fontSize: "28px",
  fontWeight: "800",
  textAlign: "center",
  border: "none",
  outline: "none",
}));
const MovieDetailesArticle = styled(Box)(() => ({
  marginLeft: "50px",
  width: "50%",
  display: "flex",
  gap: "25px",
  flexDirection: "column",
}));

const MovieDetailesTitle = styled("h1")(() => ({
  fontFamily: "Lato, sans_serif",
  fontSize: "48px",
  lineHeight: "48px",
  color: "#f9f9f9",
}));

const MovieView = styled("p")(() => ({
  fontFamily: "Lato, sans_serif",
  fontWeight: "600",
  fontSize: "18px",
  lineHeight: "18px",
  color: "#f9f9f9",
  marginBottom: "20px",
}));

const MovieDetailsImage = styled("img")(() => ({
  borderRadius: "20px 20px 0 0",
}));

const MovieDetailsImageTag = styled("span")(() => ({
  position: "absolute",
  top: 0,
  right: 0,
  borderRadius: "0 10px 0 10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "40px",
  width: "130px",
  backgroundColor: "#f8b319",
  color: "#000000",
  fontFamily: "Lato, sans_serif",
  fontWeight: "400",
  fontSize: "21px",
}));

const ButtonsDiv = styled("div")(() => ({
  display: "flex",
  gap: "30px",
}));

const ImdbImageIn = styled("img")(() => ({
  width: "70px",
  height: "30px",
  objectFit: "contain",
}));

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movieDetails, status, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [dispatch, id]);

  const movie = movieDetails[id];

  if (status === "Loading") {
    return <CircularWithValueLabel />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!movie) {
    return <div>Movie details is not available</div>;
  }

  return (
    <MovieDetailsSection
      sx={{
        "&::before": {
          backgroundImage: `url("${movie.Poster}")`,
        },
      }}
    >
      <MovieDetailsDiv>
        <BackHomeDiv className="backHomeDiv">
          <HomeButtonLink as={Link} to="/">
            <BackButton className="BackButton">
              <ArrowBackIosNewIcon />
            </BackButton>
            Back
          </HomeButtonLink>
        </BackHomeDiv>
        <MovieDetailsMainDiv className="movieDetailsMainDiv">
          <MovieDetailesArticle className="MovieDetailesArticle">
            <MovieDetailesTitle className="MovieDetailesTitle">
              {movie.Title}
            </MovieDetailesTitle>
            <MovieView className="MovieView">Runtime: {movie.Rated}</MovieView>
            <RatingStars className="RatingStars" rating={movie.imdbRating} />
            <ImdbImageIn src={Imdb} />
            <MovieView>{movie.Plot}</MovieView>
            <ButtonsDiv>
              <WatchListButton>
                <WatchListPlus>+</WatchListPlus>
                <WatchListText>Watchlist</WatchListText>
              </WatchListButton>
              <WatchNow>Watch Now</WatchNow>
            </ButtonsDiv>
          </MovieDetailesArticle>
          <Box
            className="MovieDetailsPoster"
            sx={{ position: "relative", top: "0", left: "150px" }}
          >
            <MovieDetailsImage
              className="MovieDetailsImg"
              src={movie.Poster}
              alt={movie.Title}
            />
            <MovieDetailsImageTag>Top Rated</MovieDetailsImageTag>
          </Box>
        </MovieDetailsMainDiv>
      </MovieDetailsDiv>
    </MovieDetailsSection>
  );
};

export default MovieDetails;
