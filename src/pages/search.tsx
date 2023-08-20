import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import MUIContainer from "@mui/material/Container";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { alpha, styled } from "@mui/material/styles";
import SearchPageModal from "components/SearchPageModal";
import SearchIcon from "components/navbar/search-icon";
import { useCallback, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "store";
import { reduxSearchItems } from "store/actions/search";
import { selectSearchResults } from "store/selectors/search";
import TrackCard from "components/TrackCard";

const SearchPage = () => {
  const { q, loading, results } = useSelector(selectSearchResults);
  const valueRef = useRef("");
  const dispatch = useDispatch();

  const performSearch = useCallback(() => {
    if (!q || (q.trim() !== valueRef.current.trim() && loading !== "error")) {
      dispatch(reduxSearchItems({ query: valueRef.current }));
    }
  }, [q, loading]);

  const onSubmit = useCallback<React.FormEventHandler<HTMLFormElement>>(
    (e) => {
      e.preventDefault();
      performSearch();
    },
    [performSearch]
  );

  useEffect(() => {
    valueRef.current = q ?? "";
  }, []);

  return (
    <SearchPageModal>
      <Container maxWidth="md">
        <Stack
          alignItems="center"
          p={1}
          borderRadius={3}
          component={"form"}
          {...{ onSubmit }}
        >
          <TextField
            fullWidth
            size="medium"
            variant="outlined"
            placeholder="Search..."
            defaultValue={q}
            onChange={(e) => (valueRef.current = e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={performSearch}>
                    {loading === true ? (
                      <CircularProgress size={24} />
                    ) : (
                      <SearchIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        {/* Search results */}
        <Stack sx={{ overflowY: "auto", flexGrow: 1 }}>
          {results?.map((track, index) => (
            <TrackCard {...{ track, index }} key={track.id} />
          ))}
        </Stack>
      </Container>
    </SearchPageModal>
  );
};

const Container = styled(MUIContainer)(({ theme }) => ({
  height: "100%",
  background: alpha("#ffffff", 0.3),
  backdropFilter: "blur(10px)",
  padding: theme.spacing(2),
  boxShadow: theme.customShadows.z12,
  borderRadius: theme.spacing(1),
  display: "flex",
  flexDirection: "column",
}));

export default SearchPage;
