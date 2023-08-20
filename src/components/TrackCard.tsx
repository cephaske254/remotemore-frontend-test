import { alpha, styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Track } from "@models/tracks";
import { getFont } from "theme/fonts";
import { fDuration } from "utils/formatNumber";
import { useNavigate } from "react-router-dom";

const IMAGE_SIZE = 50;

const TrackCard: React.FC<TrackCardProps> = ({ track }) => {
  const bgImage = track.album.cover || track.artist.image;

  const navigate = useNavigate();

  const openArtistDetail = () => {
    navigate(`/artists/${track.artist.id}/`);
  };

  return (
    <RootStyles spacing={2} direction="row">
      <Image style={{ backgroundImage: `url(${bgImage})` }} />
      <Box flex={1}>
        <Typography variant="body2" component="p">
          {track.title_short}
        </Typography>

        <Stack direction="row" justifyContent="space-between" width="100%">
          <Typography
            variant="caption"
            {...getFont("poppins", "semiBold")}
            color="grey.800"
            onClick={openArtistDetail}
          >
            {track.artist.name}
          </Typography>

          <Duration
            variant="caption"
            {...getFont("workSans", "regular")}
            color="grey.800"
          >
            {fDuration(track.stats.duration)}
          </Duration>
        </Stack>
      </Box>
    </RootStyles>
  );
};

type TrackCardProps = {
  index: number;
  track: Track;
};

const RootStyles = styled(Stack)(({ theme: { palette, spacing } }) => ({
  borderBottom: `.5px solid ${palette.grey[100]}`,
  alignItems: "center",
  padding: spacing(2),
}));

const Image = styled(Box)(({ theme: { spacing, customShadows } }) => ({
  height: IMAGE_SIZE,
  width: IMAGE_SIZE,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  borderRadius: spacing(1),
  boxShadow: customShadows.z12,
}));

const Duration = styled(Typography)(
  ({ theme: { palette, customShadows } }) => ({
    background: alpha(palette.common.white, 0.5),
    paddingLeft: 8,
    paddingRight: 8,
    boxShadow: customShadows.z12,
    borderRadius: 4,
    WebkitBackdropFilter: "saturate(1.2)",
    backdropFilter: "saturate(1.2)",
  })
);

export default TrackCard;
