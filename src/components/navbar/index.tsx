import MuiAppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { NAVBAR_HEIGHT } from "./constants";
import useIsSearching from "hooks/useIsSearching";
import SearchIcon from "./search-icon";

const Navbar = () => {
  const { toggleSearch } = useIsSearching();
  return (
    <AppBar color="default" elevation={0}>
      <Container>
        <IconButton onClick={toggleSearch}>
          <SearchIcon />
        </IconButton>
      </Container>
    </AppBar>
  );
};

const AppBar = styled(MuiAppBar)(() => ({
  height: NAVBAR_HEIGHT,
}));

export default Navbar;
