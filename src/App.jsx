import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Shop from "./pages/Shop";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTheme, ThemeProvider } from "@mui/material";

const router = createBrowserRouter([
  {
    path: "/shop",
    loader: () => ({ message: "success" }),
    element: <Shop />,
  },
  {
    path: "/",
    loader: () => ({ message: "success" }),
    element: <Navigate to="/shop" />,
  },
]);

const theme = createTheme({
  palette: {
    primary: {
      main: "#FAB803",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
