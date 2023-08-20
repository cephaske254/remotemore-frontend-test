import Container from "@mui/material/Container";
import HomeScreenCharts from "features/home/charts";
import { useEffect } from "react";
import { reduxGetCharts } from "store/actions/chart";
import { useDispatch } from "store";
import { Helmet } from "react-helmet";
import FeaturedAlbums from "features/home/featured-albums";
import useLoading from "hooks/useLoading";

const HomePage = () => {
  const dispatch = useDispatch();
  const { setLoading } = useLoading();

  useEffect(() => {
    setLoading(true);
    dispatch(reduxGetCharts()).finally(() => {
      setLoading(false);
    });
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
