import Container from "@mui/material/Container";

import useTitle from "hooks/useTitle";
import Player from "components/player";
import HomeScreenCharts from "features/home/charts";

const HomePage = () => {
  useTitle("Home");

  return (
    <Container>
      <HomeScreenCharts />
      <Player />
    </Container>
  );
};

export default HomePage;
