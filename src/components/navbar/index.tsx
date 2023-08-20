import MuiAppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { NAVBAR_HEIGHT } from "./constants";
import useIsSearching from "hooks/useIsSearching";
import SearchIcon from "./search-icon";
import Logo from "components/logo";
import { Link as ReactLink } from "react-router-dom";

const Navbar = () => {
  const { toggleSearch } = useIsSearching();
  return (
    <AppBar color="default" elevation={0}>
      <Container sx={{ flex: 1, display: "flex" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          flex={1}
        >
          <Link to="/">
            <Logo height={50} width={50} />
          </Link>
          <IconButton onClick={toggleSearch}>
            <SearchIcon />
          </IconButton>
        </Stack>
      </Container>
    </AppBar>
  );
};

const AppBar = styled(MuiAppBar)(() => ({
  height: NAVBAR_HEIGHT,
}));

const Link = styled(ReactLink)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.common.dark,
  "a:visited": {
    color: "inherit",
  },
}));

export default Navbar;
