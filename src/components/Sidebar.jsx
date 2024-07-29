import React from "react";
import { styled } from "@mui/material/styles";
import { MenuItem } from "../globalStyles";
import {
  HomeOutlined,
  Explore,
  MilitaryTech,
  Star,
  Replay,
  TrendingUp,
  CloudDownload,
  Visibility,
  CheckCircle,
  SettingsOutlined,
  LoginOutlined,
  ListOutlined,
} from "@mui/icons-material";

const SidebarAside = styled("aside")(({ theme }) => ({
  width: "200px",
  [theme.breakpoints.down("lg")]: {
    width: "150px",
    // width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100px",
    // width: "100%",
  },
}));

const AsideDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

const MenuCategories = styled("ul")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  listStyle: "none",
  gap: "15px",
  padding: 0,
  margin: 0,
  [theme.breakpoints.down("sm")]: {
    gap: "10px",
  },
}));

const MenuSpan = styled("span")(({ theme }) => ({
  fontFamily: '"Lato", sans-serif',
  fontWeight: "700",
  fontSize: "18px",
  lineHeight: "21px",
  color: "inherit",
  opacity: "67%",
  [theme.breakpoints.down("lg")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));

const Sidebar = () => {
  return (
    <SidebarAside className="SidebarAside">
      <AsideDiv className="AsideDiv">
        <MenuCategories className="MenuCategories">
          <MenuSpan className="MenuSpan">Menu</MenuSpan>
          <li>
            <MenuItem to="/" className="MenuItem">
              <HomeOutlined />
              Home
            </MenuItem>
          </li>
          <li>
            <MenuItem to="/discover">
              <Explore />
              Discover
            </MenuItem>
          </li>
          <li>
            <MenuItem to="/awards">
              <MilitaryTech />
              Awards
            </MenuItem>
          </li>
          <li>
            <MenuItem to="/celebrities">
              <Star />
              Celebrities
            </MenuItem>
          </li>
        </MenuCategories>

        <MenuCategories>
          <MenuSpan>Library</MenuSpan>
          <li>
            <MenuItem to="/recent-rated">
              <Replay />
              Recent Rated
            </MenuItem>
          </li>
          <li>
            <MenuItem to="/top-rated">
              <TrendingUp />
              Top Rated
            </MenuItem>
          </li>
          <li>
            <MenuItem to="/downloaded">
              <CloudDownload />
              Downloaded
            </MenuItem>
          </li>
          <li>
            <MenuItem to="/playlists">
              <ListOutlined />
              Playlists
            </MenuItem>
          </li>
          <li>
            <MenuItem to="/watchlists">
              <Visibility />
              Watchlists
            </MenuItem>
          </li>
          <li>
            <MenuItem to="/completed">
              <CheckCircle />
              Completed
            </MenuItem>
          </li>
        </MenuCategories>

        <MenuCategories>
          <MenuSpan>General</MenuSpan>
          <li>
            <MenuItem to="/settings">
              <SettingsOutlined />
              Settings
            </MenuItem>
          </li>
          <li>
            <MenuItem to="/logout">
              <LoginOutlined />
              Log Out
            </MenuItem>
          </li>
        </MenuCategories>
      </AsideDiv>
    </SidebarAside>
  );
};

export default Sidebar;
