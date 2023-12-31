import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "store";
import { reduxGetArtistDetail } from "store/actions/artists";
import { selectArtistDetails } from "store/selectors/artists";
import ArtistHeader from "features/artists/artist-header";
import ArtistTopTracks from "features/artists/artist-top-tracks";
import useLoading from "hooks/useLoading";
import ArtistTopAlbums from "features/artists/artist-top-albums";
import AlbumCard from "components/album-card";
import { Helmet } from "react-helmet";

const ArtistDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, loading } = useSelector(selectArtistDetails(id as string));

  useLoading(loading);

  const artist = data?.artist ?? null;
  const top = data?.tracks?.data ?? null;
  const albums = data?.albums?.data ?? [];

  const top_albums = useMemo(() => {
    return albums.slice(0, 3);
  }, [albums]);

  useEffect(() => {
    if (id) dispatch(reduxGetArtistDetail(id as string));
  }, [id]);

  if (!artist) return null;

  const total = data?.albums?.total ?? 0;

  return (
    <Container sx={{ pb: 4}}>
      <ArtistHeader {...{ artist }} />

      <Helmet>
        <title>{artist.name}</title>
      </Helmet>

      <Grid container sx={{ mt: 4 }} spacing={4}>
        <Grid item xs={12} md={12} lg={7}>
          <ArtistTopTracks {...{ top }} />
        </Grid>

        <Grid item xs={12} md={12} lg={5}>
          <ArtistTopAlbums {...{ albums: top_albums, total }} />
        </Grid>
      </Grid>

      {total > 0 && (
        <Grid
          container
          sx={{
            marginTop: {
              md: 3,
            },
          }}
          spacing={3}
          id="albums"
        >
          <Grid item xs={12}>
            <Typography variant="h6" color="grey.800">
              Albums
            </Typography>
          </Grid>

          {albums.map((album, index) => (
            <Grid item xs={12} md={12} lg={4} key={album.id ?? index}>
              <AlbumCard variant="large" {...{ album }} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default ArtistDetail;
