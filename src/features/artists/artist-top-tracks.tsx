import { Track } from "@models/tracks";
import Paper from "@mui/material/Paper";
import TrackCard from "components/TrackCard";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const ArtistTopTracks: React.FC<ArtistTopTracksProps> = ({ top }) => {
  if (!top?.length)
    return (
      <Typography textAlign="center" variant="body2" color="grey.600">
        Nothing to show...
      </Typography>
    );
  return (
    <Paper elevation={3} sx={{ height: "100%", p: 2 }}>
      <Typography variant="subtitle2">
        Top #{top?.length || ""} tracks
      </Typography>
      <Divider sx={{ mt: 2, mb: 1 }} />

      {top?.map((track, index) => (
        <TrackCard {...{ index, track }} key={track.id} />
      ))}
    </Paper>
  );
};

type ArtistTopTracksProps = {
  top: Track[] | null;
};
export default ArtistTopTracks;
