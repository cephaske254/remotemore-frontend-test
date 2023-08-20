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

import { useSelector } from "react-redux";
import { selectCharts } from "store/selectors/charts";
import { fPadNumber } from "utils/formatNumber";
import FeaturedArtist from "./featured-artist";
import { MIN_HEIGHT } from "./constants";
import TrackCard from "components/TrackCard";
import Box from "@mui/material/Box";

const headings = ["#", ""];

const HomeScreenCharts = () => {
  const { charts, loading } = useSelector(selectCharts);
  const { data } = charts?.tracks ?? { data: [], loading: false };

  if (loading) return null;

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
            <Table
              size="small"
              stickyHeader
              sx={{ minHeight: 400 }}
              padding="none"
            >
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
                      <Box sx={{ padding: 0 }}>
                        <TrackCard {...{ track }} />
                      </Box>
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

export default HomeScreenCharts;
