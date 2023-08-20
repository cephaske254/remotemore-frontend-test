import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ThemeProvider } from "./theme";
import { Provider } from "react-redux";
import store from "store";
import { LoadingProvider } from "contexts/loading";
import { HeadProvider } from "react-head";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet titleTemplate={"Infiniti | %s"}>
        <title>Home</title>
      </Helmet>
      <ThemeProvider>
        <Provider {...{ store }}>
          <LoadingProvider>
            <HeadProvider>
              <RouterProvider {...{ router }} />
            </HeadProvider>
          </LoadingProvider>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
