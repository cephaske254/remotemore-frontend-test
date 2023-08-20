import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ThemeProvider } from "./theme";
import { Provider } from "react-redux";
import store from "store";
import { LoadingProvider } from "contexts/loading";

function App() {
  return (
    <ThemeProvider>
      <Provider {...{ store }}>
        <LoadingProvider>
          <RouterProvider {...{ router }} />
        </LoadingProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
