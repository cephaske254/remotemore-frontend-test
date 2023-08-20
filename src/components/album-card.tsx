import { TrackAlbum } from "@models/tracks";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { fToYear } from "utils/formatTime";
import { alpha } from "@mui/system";
import { getFont } from "theme/fonts";
import UsersIcon from "features/artists/users-icon";
import { fShortenNumber } from "utils/formatNumber";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ALBUM_SIZE = 100;
const DEFAULT_ALBUM_ART = "/album.jpeg";

const AlbumCard: React.FC<AlbumCardProps> = ({
  album,
  variant = "default",
}) => {
  const navigate = useNavigate();

  const handleOpenArtist = useCallback(() => {
    if (album.artist?.id) navigate(`/artists/${album.artist.id}/`);
  }, [album]);

  if (variant === "large")
    return <LargeAlbumCard album={album} onClick={handleOpenArtist} />;

  return (
    <RootStyles elevation={0} onClick={handleOpenArtist}>
      <CardContent component={Stack} direction="row" spacing={2}>
        <CardMedia>
          <Image
            style={{
              backgroundImage: `url('${
                album.cover ?? album.artist?.image ?? DEFAULT_ALBUM_ART
              }')`,
            }}
          />
        </CardMedia>
        <Stack flex={1} justifyContent="space-evenly" pb={2} pt={2} spacing={1}>
          <Typography variant="subtitle1" color="grey.800">
            {album.title}{" "}
          </Typography>
          {!!album.stats?.release_date && (
            <Typography variant="caption" color="grey.600">
              Release date {fToYear(album.stats?.release_date)}
            </Typography>
          )}{" "}
          <RenderFans {...{ album, large: false }} />
        </Stack>
      </CardContent>
    </RootStyles>
  );
};

const LargeAlbumCard: React.FC<AlbumCardProps> = ({ album, onClick }) => {
  return (
    <RootStyles
      variant="outlined"
      sx={({ palette }) => ({
        background: alpha(palette.common.white, 0.3),
        border: `.5px solid ${palette.grey[100]}`,
        borderRadius: 3,
        height: "100%",
      })}
      onClick={onClick}
    >
      <CardContent
        component={Stack}
        direction={{
          xs: "row",
          lg: "column",
        }}
        spacing={2}
        alignItems={{
          lg: "center",
        }}
      >
        <Image
          large
          style={{
            backgroundImage: `url(${
              album.cover ?? album.artist?.image ?? DEFAULT_ALBUM_ART
            })`,
          }}
        />

        <Stack
          flex={1}
          spacing={{
            xs: 2,
            lg: 0.5,
          }}
          justifyContent="center"
        >
          <Typography
            variant="body2"
            {...getFont("workSans", "medium")}
            textAlign="center"
          >
            {album.title}{" "}
          </Typography>

          {!!album.stats?.release_date && (
            <Typography
              variant="caption"
              component="p"
              color="grey.600"
              textAlign="center"
            >
              Release date {fToYear(album.stats?.release_date)}
            </Typography>
          )}

          <RenderFans {...{ album, large: true }} />
        </Stack>
      </CardContent>
    </RootStyles>
  );
};

const RenderFans: React.FC<{ album: TrackAlbum; large: boolean }> = ({
  album,
  large,
}) => {
  if (!album.stats?.fans) return null;

  return (
    <Stack
      spacing={1}
      direction="row"
      alignItems="center"
      color="grey.600"
      justifyContent={large ? "center" : "start"}
    >
      <UsersIcon height={18} width={18} />
      <Typography variant="caption" component="p">
        {fShortenNumber(album.stats?.fans)} fans
      </Typography>
    </Stack>
  );
};

const RootStyles = styled(Card)(() => ({
  cursor: "pointer",
}));

const Image = styled(Box, {
  shouldForwardProp: (prop) => prop !== "large",
})<{
  large?: boolean;
}>(({ large, theme: { spacing, customShadows, breakpoints } }) => {
  if (!large)
    return {
      height: ALBUM_SIZE,
      width: ALBUM_SIZE,
      borderRadius: spacing(1),
      backgroundPosition: "center",
    };

  const size = ALBUM_SIZE * 1.5;
  return {
    height: size,
    width: size,
    borderRadius: spacing(1),
    boxShadow: customShadows.z8,
    backgroundPosition: "center",

    [breakpoints.up("lg")]: {
      height: ALBUM_SIZE * 2,
      width: ALBUM_SIZE * 2,
    },
  };
});
export type AlbumCardProps = {
  album: TrackAlbum;
  variant?: "default" | "large";
  onClick?: VoidFunction;
};

export default AlbumCard;
