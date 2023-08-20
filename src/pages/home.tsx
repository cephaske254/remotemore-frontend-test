import Container from "@mui/material/Container";
import HomeScreenCharts from "features/home/charts";
import { useEffect } from "react";
import { reduxGetCharts } from "store/actions/chart";
import { useDispatch } from "store";
import { Helmet } from "react-helmet";
import FeaturedAlbums from "features/home/featured-albums";
import useLoading from "hooks/useLoading";
import { useSelector } from "react-redux";
import { selectCharts } from "store/selectors/charts";

const HomePage = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(selectCharts);
  
  useLoading(loading);

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
