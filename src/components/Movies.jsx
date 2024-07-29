import React from "react";
import { styled } from "@mui/material/styles";
import chernobyl from "../assets/images/movie-posters/chernobyl.png";
import loki from "../assets/images/movie-posters/loki.png";
import rickandmorty from "../assets/images/movie-posters/rickandmorty.png";
import ReviewHalf from "../assets/images/ReviewHalf.png";
import { Box } from "@mui/material";

const MovieCardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    flexWrap: "wrap",
    gap: "10px",
  },
}));

const PosterCard = styled(Box)(() => ({
  width: "240px",
  height: "300px",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  borderRadius: "20px",
}));

const MovieTitle = styled("p")(() => ({
  padding: " 20px 0 0 20px",
  fontFamily: "Lato, sans-serif",
  fontWeight: "800",
  fontSize: "24px",
  lineHeight: "24px",
  color: " #ffffff",
}));

const MovieImagedDv = styled(Box)(() => ({
  width: "95px",
  height: "15px",
  margin: "0 0 auto 20px",
}));

const MovieImage = styled("img")(() => ({
  width: "100%",
  height: "100%",
}));

const EpisodeInfo = styled(Box)(() => ({
  display: "flex",
  justifyContent: " space-between",
}));

const EpisodeNumber = styled(Box)(() => ({
  margin: "0 0 10px 20px",
  fontFamily: "Lato, sans-serif",
  fontWeight: "700",
  fontSize: "18px",
  lineHeight: " 18p",
  color: " #ffffff",
  opacity: " 67%",
}));

const EpisodeName = styled(Box)(() => ({
  marginright: "10px",
  fontFamily: "Lato, sans-serif",
  fontWeight: "700",
  fontSize: "18px",
  lineHeight: "18px",
  color: "#ffffff",
  opacity: "67%",
}));

const CardButtons = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  margin: "0 10px 10px 10px",
  gap: "10px",
}));

const AddButtton = styled("button")(() => ({
  border: "none",
  outline: "none",
  width: "57px",
  height: "57px",
  borderRadius: "15px",
  backgroundColor: "rgba(249, 249, 249, 0.2)",
  color: "#f9f9f9",
  fontFamily: "Lato, sans-serif",
  fontWeight: "800",
  fontSize: "48px",
  lineHeight: "48px",
  "&:hover": {
    opacity: "90%",
    cursor: "pointer",
  },
}));

const MoreInfoButtton = styled("button")(() => ({
  border: "none",
  outline: "none",
  width: "150px",
  height: "57px",
  borderRadius: "15px",
  backgroundColor: "#f8b319",
  color: "#21242d",
  fontFamily: "Lato, sans-serif",
  fontWeight: "800",
  fontSize: "18px",
  lineHeight: "18px",
  "&:hover": {
    opacity: "90%",
    cursor: "pointer",
  },
}));

const reviewHalf = ReviewHalf;

const Movies = () => {
  return (
    <MovieCardContainer>
      <PosterCard sx={{ backgroundImage: `url(${loki})` }}>
        <MovieTitle>Loki</MovieTitle>
        <MovieImagedDv>
          <MovieImage src={reviewHalf} alt="Review"></MovieImage>
        </MovieImagedDv>
        <EpisodeInfo>
          <EpisodeNumber>6 Ep</EpisodeNumber>
          <EpisodeName>Superhero</EpisodeName>
        </EpisodeInfo>
        <CardButtons>
          <AddButtton>+</AddButtton>
          <MoreInfoButtton>More info</MoreInfoButtton>
        </CardButtons>
      </PosterCard>
      <PosterCard sx={{ backgroundImage: `url(${chernobyl})` }}>
        <MovieTitle>Chernobyl</MovieTitle>
        <MovieImagedDv>
          <MovieImage src={reviewHalf} alt="Review"></MovieImage>
        </MovieImagedDv>
        <EpisodeInfo>
          <EpisodeNumber>5 Ep</EpisodeNumber>
          <EpisodeName>Mini Series</EpisodeName>
        </EpisodeInfo>
        <CardButtons>
          <AddButtton>+</AddButtton>
          <MoreInfoButtton>More info</MoreInfoButtton>
        </CardButtons>
      </PosterCard>
      <PosterCard sx={{ backgroundImage: `url(${rickandmorty})` }}>
        <MovieTitle>Rick and Morty</MovieTitle>
        <MovieImagedDv>
          <MovieImage src={reviewHalf} alt="Review"></MovieImage>
        </MovieImagedDv>
        <EpisodeInfo>
          <EpisodeNumber>9 Ep</EpisodeNumber>
          <EpisodeName>Fantasy</EpisodeName>
        </EpisodeInfo>
        <CardButtons>
          <AddButtton>+</AddButtton>
          <MoreInfoButtton>More info</MoreInfoButtton>
        </CardButtons>
      </PosterCard>
    </MovieCardContainer>
  );
};

export default Movies;
