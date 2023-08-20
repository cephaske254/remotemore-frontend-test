import Stack, { StackProps } from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { ArtistDetail } from "@models/artist";
import DefaultMusicIcon from "./music-icon";
import UsersIcon from "./users-icon";
import { fNumber, fShortenNumber } from "utils/formatNumber";
import { getFont } from "theme/fonts";
import { cloneElement, forwardRef } from "react";
import AlbumIcon from "./album-icon";
import useResponsive from "hooks/useResponsive";

const IMAGE_SIZE = 150;
const IMAGE_SIZE_SM = 100;

const ArtistHeader: React.FC<ArtistHeaderProps> = ({ artist }) => {
  const isMobile = useResponsive("down", "md");
  if (!artist) return null;
  const bgImage = artist?.image;

  return (
    <Paper variant="outlined" sx={{ mt: 2, bgcolor: "grey.100" }}>
      <Stack direction="row" p={3} spacing={3}>
        <UserAvatar src={bgImage} />

        <Stack justifyContent="space-evenly" flex={1}>
          <TitleContainer>
            <Typography variant={isMobile ? "h5" : "h3"}>
              {artist.name}
            </Typography>
            <MusicIcon />
          </TitleContainer>

          <Stack direction="row" justifyContent="space-around">
            <Tooltip title="Fans">
              <IconData icon={<UsersIcon />} color="common.purple">
                {fShortenNumber(artist.stats.fans)}
              </IconData>
            </Tooltip>

            <Divider flexItem orientation="vertical" />

            <Tooltip title="Albums">
              <IconData icon={<AlbumIcon />} color="common.lightGreen">
                {fNumber(artist.stats.albums)}
              </IconData>
            </Tooltip>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};

const IconData = forwardRef<
  any,
  {
    icon: React.ReactElement;
    children: React.ReactNode;
    color?: string;
  } & StackProps
>(function ({ children, color, icon, ...props }, ref) {
  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      justifyContent="center"
      {...{ ref, color }}
      {...props}
      style={{ cursor: "pointer" }}
    >
      {cloneElement(icon, {
        height: 20,
        width: 20,
      })}
      <Typography
        variant="caption"
        {...getFont("poppins", "semiBold")}
        color={color}
      >
        {children}
      </Typography>
    </Stack>
  );
});

const UserAvatar = styled(Avatar)(({ theme }) => ({
  width: IMAGE_SIZE,
  height: IMAGE_SIZE,
  boxShadow: theme.customShadows.card,

  [theme.breakpoints.down("sm")]: {
    width: IMAGE_SIZE_SM,
    height: IMAGE_SIZE_SM,
  },
}));

const MusicIcon = styled(DefaultMusicIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const TitleContainer = styled("div")(() => ({
  position: "relative",
  display: "flex",
}));

type ArtistHeaderProps = {
  artist: ArtistDetail | null;
};

export default ArtistHeader;
