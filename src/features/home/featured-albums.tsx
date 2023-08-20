import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { useSelector } from "react-redux";
import { selectCharts } from "store/selectors/charts";
import AlbumCard from "components/album-card";

const FeaturedAlbums = () => {
  const { charts } = useSelector(selectCharts);
  const albums = charts?.albums?.data ?? [];

  return (
    <Paper elevation={0} sx={{ my: 3, p: 2 }}>
      <Typography
        variant="h6"
        sx={{
          marginBottom: {
            xs: 3,
            md: 0,
          },
        }}
      >
        Featured Albums
      </Typography>
      <Grid container>
        {albums.map((album, index) => {
          return (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <AlbumCard {...{ album, variant: "large" }} />
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
};

export default FeaturedAlbums;
