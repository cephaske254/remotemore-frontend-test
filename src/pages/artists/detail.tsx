import Container from "@mui/material/Container";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "store";
import { reduxGetArtistDetail } from "store/actions/artists";
import { selectArtistDetails } from "store/selectors/artists";
import ArtistHeader from "features/artists/artist-header";

const ArtistDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, loading } = useSelector(selectArtistDetails(id as string));

  const artist = data?.artist ?? null;

  useEffect(() => {
    if (id) dispatch(reduxGetArtistDetail(id as string));
  }, [id]);
  return (
    <Container>
      <ArtistHeader {...{ artist }} />
    </Container>
  );
};

export default ArtistDetail;
