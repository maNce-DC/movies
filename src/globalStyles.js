import { createGlobalStyle } from "styled-components";
import React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { keyframes } from "@mui/system";
import { NavLink } from "react-router-dom";

export const GlobalStyles = createGlobalStyle`

*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const Navigation = styled("ul")(() => ({
  width: "auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "50px",
  listStyle: "none",
  marginBottom: 0,
}));

export const underlineAnimation = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

export const List = styled(Link)(() => ({
  position: "relative",
  textDecoration: "none",
  cursor: "pointer",
  fontFamily: "Lato, sans_serif",
  fontWeight: "800",
  fontSize: "24px",
  lineHeight: "24px",
  color: "inherit",
  "&::after": {
    content: '""',
    width: "0",
    borderRadius: "92px",
    borderBottom: `4px solid #f8b319`,
    position: "absolute",
    bottom: "-8px",
    left: 0,
    transition: "width 400ms ease-in-out",
  },
  "&:hover::after": {
    width: "100%",
    animation: `${underlineAnimation} 200ms ease-in-out forwards`,
  },
}));

export const ThemeButton = styled("button")(() => ({
  border: "none",
  width: "150px",
  height: "57px",
  borderRadius: "15px",
  backgroundColor: "#f8b319",
  color: "#000",
  fontFamily: "Lato, sans_serif",
  fontWeight: "800",
  lineHeight: "18px",
  fontSize: "18px",
  "&:hover": {
    opacity: "90%",
    cursor: "pointer",
  },
}));

export const MenuItem = styled(NavLink)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "10px 15px",
  borderRadius: "5px",
  fontFamily: '"Lato", sans-serif',
  fontWeight: "700",
  fontSize: "16px",
  color: "inherit",
  textDecoration: "none",
  "&:hover": {
    backgroundColor: "rgba(248, 179, 25, 0.1)",
  },
  "&.active": {
    color: "#f8b319",
    borderRight: "2px solid #f8b319",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "14px",
    padding: "8px 12px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    padding: "6px 10px",
    gap: "8px",
  },
}));

const Container = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(3),
  marginRight: theme.spacing(3),
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  [theme.breakpoints.up("md")]: {
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(8),
  },
}));

const GlobalLayout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default GlobalLayout;
