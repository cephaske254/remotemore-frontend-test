import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import { getFont } from "theme/fonts";
import { useEffect } from "react";
import { reduxGetCharts } from "store/actions/chart";
import { useDispatch } from "store";
import { useSelector } from "react-redux";
import { selectCharts } from "store/selectors/charts";
import { fDuration, fPadNumber } from "utils/formatNumber";
import { styled } from "@mui/material/styles";
import FeaturedArtist from "./featured-artist";
import { MIN_HEIGHT } from "./constants";

const headings = ["#", "Track Name", "Artist", "Duration"];

const HomeScreenCharts = () => {
  const dispatch = useDispatch();
  const { charts, loading } = useSelector(selectCharts);
  const { data } = charts?.tracks ?? { data: [], loading: false };

  useEffect(() => {
    dispatch(reduxGetCharts());
  }, []);

  return (
    <Paper elevation={0} sx={{ my: 3, p: 2 }}>
      <Typography
        variant="h6"
        sx={{
          marginBottom: {
            xs: 3,
            md: 0,
          },
        }}
      >
        Featured Charts
      </Typography>
      <Stack
        direction={{
          xs: "column-reverse",
          md: "row",
        }}
        maxHeight={{
          xs: "unset",
          md: MIN_HEIGHT,
        }}
        spacing={4}
      >
        <Stack direction="column" spacing={3} flex={1}>
          <Typography
            variant="body2"
            {...getFont("workSans", "medium")}
            color="grey.A700"
          >
            #{data.length} Tracks
          </Typography>

          <TableContainer>
            <Table size="small" stickyHeader sx={{ minHeight: 400 }}>
              <TableHead>
                <TableRow>
                  {headings.map((heading) => (
                    <TableCell key={heading} sx={{ backgroundColor: "white" }}>
                      <Typography variant="caption">{heading}</Typography>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((track, index) => (
                  <TableRow key={index}>
                    <TableCell>{fPadNumber(index + 1)}</TableCell>
                    <TableCell>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Image src={track.album.cover} />
                        <Typography variant="subtitle2" color="grey.800">
                          {track.title_short}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" color="grey.700">
                        {track.artist.name}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" color="grey.700">
                        {fDuration(track.stats.duration)}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
        {/*  */}
        {!!data?.[0] && <FeaturedArtist track={data[0]} />}
      </Stack>
    </Paper>
  );
};

const Image = styled("img")(() => ({
  height: 45,
  width: 45,
  borderRadius: 6,
}));

export default HomeScreenCharts;
