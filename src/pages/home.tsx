import Container from "@mui/material/Container";
import HomeScreenCharts from "features/home/charts";
import { useEffect } from "react";
import { reduxGetCharts } from "store/actions/chart";
import { useDispatch } from "store";
import { Helmet } from "react-helmet";
import FeaturedAlbums from "features/home/featured-albums";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reduxGetCharts());
  }, []);

  return (
    <Container>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HomeScreenCharts />

      <FeaturedAlbums />
    </Container>
  );
};

export default HomePage;
