import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import { fetchTopRatedMovies, fetchMovieDetails } from "../slices/movieSlice";
import RatingStars from "./RatingStars";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import CircularWithValueLabel from "./CircularProgressWithLabel";

const TopRatedMoviesTitle = styled("h2")(() => ({
  margin: "220px 0 60px 0",
  fontFamily: "Lato, sans_serif",
  fontWeight: "800",
  fontSize: "48px",
  lineHeight: "48px",
  color: "inherit",
}));

const TopRatedSection = styled("section")(() => ({
  width: "100%",
  maxWidth: "1440px",
  margin: "0 auto",
}));

const TopRatedCardContainer = styled("ul")(() => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
}));

const TopRatedCard = styled("li")(() => ({
  position: "relative",
  width: "300px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#e9ecef",
  borderRadius: "20px",
  "&:hover": {
    boxShadow:
      "0px 4px 6px -1px rgba(0, 0, 0, 0.2), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
  },
}));

const TopRatedMoviePoster = styled("img")(() => ({
  width: "100%",
  height: "60%",
  borderRadius: "20px 20px 0 0",
  objectFit: "contain",
}));

const PosterTitleContainer = styled("div")(() => ({
  padding: "5px",
}));

const MovieTitle = styled("h3")(() => ({
  fontFamily: "Lato, sans_serif",
  fontWeight: "600",
  fontSize: "30px",
  lineHeight: "32px",
  color: "#000000",
}));

const MovieDate = styled("h4")(() => ({
  fontFamily: "Lato, sans_serif",
  fontWeight: "700",
  fontSize: "18px",
  lineHeight: "21px",
  color: "#000000",
  opacity: "67%",
  marginTop: "20px",
}));

const MovieDescription = styled("h3")(() => ({
  fontFamily: "Lato, sans_serif",
  fontWeight: "600",
  fontSize: "14px",
  lineHeight: "16px",
  color: "#000000",
}));

const maxlength = 100;

const truncateDescription = (desc) => {
  return desc.length < maxlength ? desc : desc.slice(0, maxlength) + "...";
};

const TopRatedMovies = () => {
  const dispatch = useDispatch();
  const { topRatedMovies, movieDetails, status, error } = useSelector(
    (state) => state.movies
  );

  useEffect(() => {
    dispatch(fetchTopRatedMovies());
  }, [dispatch]);

  useEffect(() => {
    if (topRatedMovies.length > 0) {
      topRatedMovies.slice(0, 4).forEach((movie) => {
        if (!movieDetails[movie.imdbID]) {
          dispatch(fetchMovieDetails(movie.imdbID));
        }
      });
    }
  }, [dispatch, topRatedMovies, movieDetails]);

  if (status === "loading") {
    return <CircularWithValueLabel />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const sliced = topRatedMovies.slice(0, 4);

  console.log(sliced);

  return (
    <TopRatedSection className="top-rated-movies">
      <TopRatedMoviesTitle>Top Rated Movies</TopRatedMoviesTitle>
      <TopRatedCardContainer className="top-rated-movies-cards">
        {sliced.map((movie) => {
          const movieDetail = movieDetails[movie.imdbID] || {};
          console.log(movieDetail);
          return (
            <TopRatedCard className="top-rated-movie-card" key={movie.imdbID}>
              <Link
                component={RouterLink}
                sx={{ color: "#f8b319", textDecoration: "none" }}
                to={`movie/${movie.imdbID}`}
              >
                <TopRatedMoviePoster src={movie.Poster} alt={movie.Title} />
                <PosterTitleContainer>
                  <MovieTitle>{movie.Title}</MovieTitle>
                  <RatingStars rating={movieDetail.imdbRating} />
                  <MovieDate>{movieDetail.Year}</MovieDate>
                  <MovieDescription>
                    {movieDetail.Plot
                      ? truncateDescription(movieDetail.Plot)
                      : "No description available."}
                  </MovieDescription>
                </PosterTitleContainer>
              </Link>
            </TopRatedCard>
          );
        })}
      </TopRatedCardContainer>
    </TopRatedSection>
  );
};

export default TopRatedMovies;
