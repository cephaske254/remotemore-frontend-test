import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ThemeProvider } from "./theme";
import { Provider } from "react-redux";
import store from "store";

function App() {
  return (
    <ThemeProvider>
      <Provider {...{ store }}>
        <RouterProvider {...{ router }} />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
