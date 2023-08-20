import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { ArtistDetail } from "@models/artist";
import DefaultMusicIcon from "./music-icon";

const IMAGE_SIZE = 150;

const ArtistHeader: React.FC<ArtistHeaderProps> = ({ artist }) => {
  if (!artist) return null;
  const bgImage = artist?.image;

  return (
    <Paper variant="outlined" sx={{ mt: 2, bgcolor: "grey.100" }}>
      <Stack direction="row" p={3} spacing={3}>
        <UserAvatar src={bgImage} />

        <div>
          <TitleContainer>
            <Typography variant="h3">{artist.name}</Typography>
            <MusicIcon />
          </TitleContainer>
        </div>
      </Stack>
    </Paper>
  );
};

const UserAvatar = styled(Avatar)(() => ({
  width: IMAGE_SIZE,
  height: IMAGE_SIZE,
}));

const MusicIcon = styled(DefaultMusicIcon)(({ theme }) => ({
  position: "absolute",
  top: 0,
  right: -35,
  color: theme.palette.primary.main,
}));

const TitleContainer = styled("div")(() => ({
  position: "relative",
}));

type ArtistHeaderProps = {
  artist: ArtistDetail | null;
};

export default ArtistHeader;
