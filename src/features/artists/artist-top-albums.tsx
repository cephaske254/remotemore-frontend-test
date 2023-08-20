import { TrackAlbum } from "@models/tracks";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import AlbumCard from "components/album-card";
import useResponsive from "hooks/useResponsive";

const ArtistTopAlbums: React.FC<ArtistTopAlbumsProps> = ({ albums, total }) => {
  const isMobile = useResponsive("down", "md");

  if (isMobile) return null;

  return (
    <Paper
      elevation={3}
      sx={{ height: "100%", p: 2, display: "flex", flexDirection: "column" }}
    >
      {total > 0 && (
        <>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="subtitle2">
              Top #{albums?.length} albums
            </Typography>
            <Button href="#albums" variant="text" size="small" sx={{ mt: -1 }}>
              View all({total})
            </Button>
          </Stack>
          <Divider sx={{ mt: 2, mb: 1 }} />
        </>
      )}

      {!total && (
        <Stack alignItems="center" justifyContent="center" flex={1}>
          <Typography variant="caption" component="p" textAlign="center">
            No albums found
          </Typography>
        </Stack>
      )}

      {albums?.map((album, index) => (
        <AlbumCard {...{ index, album }} key={album.id} />
      ))}
    </Paper>
  );
};

type ArtistTopAlbumsProps = {
  albums: TrackAlbum[] | null;
  total: number;
};
export default ArtistTopAlbums;
