import { TrackAlbum } from "@models/tracks";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import AlbumCard from "components/album-card";
import useResponsive from "hooks/useResponsive";

const ArtistAlbums: React.FC<ArtistTopTracksProps> = ({ albums, total }) => {
  const isMobile = useResponsive("down", "md");

  if (isMobile) return null;

  return (
    <Paper elevation={3} sx={{ height: "100%", p: 2 }}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle2">
          Top #{albums?.length} albums
        </Typography>
        <Button href="#albums" variant="text" size="small" sx={{ mt: -1 }}>
          View all({total})
        </Button>
      </Stack>
      <Divider sx={{ mt: 2, mb: 1 }} />

      {albums?.map((album, index) => (
        <AlbumCard {...{ index, album }} key={album.id} />
      ))}
    </Paper>
  );
};

type ArtistTopTracksProps = {
  albums: TrackAlbum[] | null;
  total: number;
};
export default ArtistAlbums;
