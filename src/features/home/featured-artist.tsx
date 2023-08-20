import MUICard from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import MuiIconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { Track } from "@models/tracks";
import { getFont } from "theme/fonts";
import { MIN_HEIGHT_SM } from "./constants";
import PlayIcon from "components/player/icons/play";

const FeaturedArtist: React.FC<FeaturedArtistProps> = ({ track }) => {
  const artist = track.artist;
  return (
    <Card
      variant="outlined"
      sx={{
        backgroundImage: `url('${artist.image}')`,
        position: "relative",
        minHeight: MIN_HEIGHT_SM,
      }}
    >
      <Overlay>
        <Typography
          variant="subtitle2"
          color="grey.200"
          {...getFont("poppins", "semiBold")}
        >
          Featured Artist
        </Typography>

        <Typography
          variant="h2"
          component="p"
          color="primary.main"
          {...getFont("workSans", "light")}
        >
          {artist.name}
        </Typography>

        <IconButton>
          <PlayIcon />
        </IconButton>
      </Overlay>
    </Card>
  );
};

const Card = styled(MUICard)(() => ({
  borderRadius: "10px !important",
  overflow: "hidden",
  flex: 1,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "relative",
}));

const Overlay = styled("div")(({ theme: { spacing } }) => ({
  position: "absolute",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  backdropFilter: "blur(10px)",
  background: "linear-gradient(transparent 0%, rgba(0,0,0,.9) 61%)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: spacing(2),

  "& .gradient": {
    background: `-webkit-linear-gradient(#eee, #333)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
}));

const IconButton = styled(MuiIconButton)(() => ({
  color: "white",
  position: "absolute",
  bottom: 10,
  left: 10,
  right: 10,
  marginLeft: "auto",
  marginRight: "auto",
}));

type FeaturedArtistProps = {
  track: Track;
};

export default FeaturedArtist;
